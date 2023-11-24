import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/native';
import { api } from '../services/apiUser';
import { useNavigation } from '@react-navigation/native';

interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string, navigation: NavigationProp<any, any>) => Promise<void>;
  logout: () => Promise<void>;  
  message: string
  verifyRegister: (email: string) => Promise<User | null>;
}

interface User {
  username: string;
  email: string;
  password: string;
}

interface AuthProviderProps {
  children: React.ReactNode;
  navigation?: NavigationProp<any, any>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string>("");
  const navigation: NavigationProp<any> = useNavigation();

  useEffect(() => {
    const checkUserLogado = async () => {
      try {
        const userData = await AsyncStorage.getItem('user-data');

        if (userData) {
          const { username, email, password } = JSON.parse(userData);
          setUser({ username, email, password });
          navigation.navigate('bottomTabRoutes');
        } else {
          navigation.navigate('login');
        }
      } catch (error) {
        console.error('Erro ao verificar usuário:', error);
      }
    };

    checkUserLogado();

  }, [navigation]);

  const saveUserDataToStorage = async (username: string, email: string, password: string) => {
    try {
      const jsonValue = JSON.stringify({ username, email, password });
      await AsyncStorage.setItem('user-data', jsonValue);
    } catch (error) {
      console.error('Erro ao salvar dados do usuário no AsyncStorage:', error);
    }
  };
  const login = async (email: string, password: string) => {
    try {
      const response = await api.get('/usuarios');
      const users = response.data;

      const authenticatedUser = users.find((user: User) => user.email === email && user.password === password);


      if (authenticatedUser != undefined) {
        setUser(authenticatedUser);
        await saveUserDataToStorage(authenticatedUser.username, email, password);
        navigation.navigate('bottomTabRoutes');
      } else {
        setMessage("Credenciais inválidas");
      }
    } catch (error) {
      console.error('Erro durante o login:', error);
    }
  };

  const logout = async () => {
    try {
      setUser(null);
      await AsyncStorage.removeItem('user-data');
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };

  const verifyRegister = async (email: string): Promise<User | null> => {
    try {
      const response = await api.get('/usuarios');
      const users = response.data;
  
      const registerUser = users.find((user: User) => user.email === email);
  
      return registerUser || null; // Retorna o usuário encontrado ou null se não existir
    } catch (error) {
      console.error('Erro durante a verificação de registro:', error);
      throw error; // Propaga o erro para que a função chamadora possa lidar com isso
    }
  };

  const contextValue: AuthContextProps = {
    user,
    login,
    logout,
    message,
    verifyRegister
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthContext;