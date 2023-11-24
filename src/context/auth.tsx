import React, { createContext, ReactNode, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/native';
import { api } from '../services/apiUser';

interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string, navigation: NavigationProp<any, any>) => Promise<void>;
  logout: () => Promise<void>;
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

export const AuthProvider: React.FC<AuthProviderProps> = ({ children, navigation }) => {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [message, setMessage] = useState<string>("");

//   const getData = async (): Promise<User | null> => {
//       try {
//           const jsonValue = await AsyncStorage.getItem('user-data');
//           return jsonValue != null ? JSON.parse(jsonValue) : null;
//       } catch (e) {
//           return null;
//       }
//   };

//   useEffect(() => {
//       getData().then(user => {
//           if (user !== null) {
//               setUser(user)
//               setEmail(user.email);
//               setPassword(user.password);
//           }
//       });
//   }, []);

const saveUserDataToStorage = async (username: string, email: string, password: string) => {
    try {
      const jsonValue = JSON.stringify({ username, email, password });
      await AsyncStorage.setItem('user-data', jsonValue);
    } catch (error) {
      console.error('Erro ao salvar dados do usuário no AsyncStorage:', error);
    }
  };
  const login = async (email: string, password: string, navigation: NavigationProp<any, any>) => {
    try {
      const response = await api.get('/usuarios'); 
      const users = response.data;      

      const authenticatedUser = users.find((user: User) => user.email === email && user.password === password);
      console.log(authenticatedUser)

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

  const contextValue: AuthContextProps = {
      user,
      login,
      logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthContext;