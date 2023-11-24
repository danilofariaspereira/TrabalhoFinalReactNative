import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, } from "react-native";
import { styles } from "./styles";
import { InputTextLogin } from "../../components/InputTextLogin";
import { PrimaryButton } from "../../components/PrimaryButton";
import save from "../../services/apiUser";
import ImageClaquete from "../../components/ImageClaquete";
import AuthContext from "../../context/auth";


export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { verifyRegister } = useContext(AuthContext)

  const validarEmail = (email: string) => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const validarSenha = (senha: string) => {
    return senha.length >= 6;
  };

  const handleSubmit = async () => {
    if (
      email === "" ||
      username === "" ||
      rePassword === "" ||
      password === ""
    ) {
      setMessage("Preencha todos os campos");
    } else if (!validarEmail(email)) {
      setMessage("Somente endereços de e-mail válidos são aceitos");
    } else if (password.length < 6) {
      setMessage("A senha deve ter pelo menos 6 caracteres");
    } else if (!validarSenha(password)) {
      setMessage("A senha deve incluir números");
    } else if (password !== rePassword) {
      setMessage("As senhas não coincidem!");
    } else {
      const registro = await verifyRegister(email);
      {console.log(registro)}
      if (registro != null) {
        setMessage("Email já cadastrado");
      } else {
        setMessage("");
        save(username, email, password);
        navigation.navigate('welcome');
        setPassword("");
        setUsername("");
        setEmail("");
        setRePassword("");
      }
    }
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
          <InputTextLogin title="Nome de usuário" value={username} onChangeText={setUsername} />
          <InputTextLogin title="Email" value={email} onChangeText={setEmail} />
          <InputTextLogin title="Senha" value={password} onChangeText={setPassword} secureContent={showPassword} onPress={setShowPassword} />
          <InputTextLogin title="Confirmar Senha" value={rePassword} onChangeText={setRePassword} secureContent={showPassword} onPress={setShowPassword} />
        </View>
        <PrimaryButton onPress={handleSubmit} title="Cadastrar" />
        <View style={styles.anyAccount}>
          <Text style={styles.text}>Já tem uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={styles.textRegister}>Faça login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};