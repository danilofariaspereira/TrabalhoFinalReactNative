import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import { styles } from "./styles";
import { InputTextLogin } from "../../components/InputTextLogin";
import { PrimaryButton } from "../../components/PrimaryButton";
import ImageClaquete from "../../components/ImageClaquete";
import AuthContext from "../../context/auth";

export default function Login({ navigation }) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { login, message } = useContext(AuthContext)

  const handleSubmit = () => {
    login(email, password, navigation)
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ImageClaquete />
        <Text style={styles.message}>{message}</Text>
        <View style={styles.textInput}>
          <InputTextLogin title="Email" value={email} onChangeText={setEmail} />
          <InputTextLogin title="Senha" value={password} secureContent={showPassword} onChangeText={setPassword} onPress={setShowPassword} />
        </View>
        <PrimaryButton onPress={handleSubmit} title="Entrar" />
        <View style={styles.anyAccount}>
          <Text style={styles.text}>Não tem uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('cadastro')}>
            <Text style={styles.textRegister}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}