import React, { useState, useEffect, useContext } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  KeyboardAvoidingView,
} from "react-native";

import { styles } from "./styles";
import { InputTextLogin } from "../../components/InputTextLogin";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from '../../assets/perfil.png'
import { PrimaryButton } from "../../components/PrimaryButton";
import AuthContext from "../../context/auth";

export default function User({ navigation }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const { logout } = useContext(AuthContext)

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user-data');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {

      console.log(e);
    }
  };

  useEffect(() => {
    getData().then(user => {
      if (user !== null) {
        setEmail(user.email);
        setUsername(user.username);
      }
    });
  }, []);

  const sair = () => {
    logout()
    navigation.navigate('login')
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
      >
        <Image source={Profile} style={styles.image} />
        <View style={styles.textInput}>
          <InputTextLogin title="Nome de usuário" value={username} editable={false} onChangeText={setUsername} />
          <InputTextLogin title="Email" value={email} editable={false} onChangeText={setEmail} />
        </View>
        <PrimaryButton onPress={sair} title="Sair da conta" />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};


