import React, { useState, useEffect, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Image, KeyboardAvoidingView, Platform } from "react-native";

import { styles } from "./styles";
import Logo from '../../assets/LogoApp1.png'
import { InputTextLogin } from "../../components/InputTextLogin";
import { PrimaryButton } from "../../components/PrimaryButton";
import { basic, form } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageClaquete from "../../components/ImageClaquete";
import AuthContext from "../../context/auth";

export default function Login({ navigation }) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);

  const { login } = useContext(AuthContext)


  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

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

//verificar se precisa de algo desses scripts (Rodrigo)

// <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//   <KeyboardAvoidingView
//     style={styles.container}
//   >
//     <Image source={Logo} style={styles.image} />
//     <Text style={styles.message}>{message}</Text>
//     <View style={styles.textInput}>
//       <InputTextLogin title="Email" value={email} onChangeText={setEmail} />
//       <InputTextLogin title="Senha" value={password} secureContent={showPassword} onChangeText={setPassword} onPress={setShowPassword} />
//     </View>
//     <PrimaryButton onPress={handleSubmit} title="Entrar" />
//     <View style={styles.anyAccount}>
//       <Text style={styles.text}>Não tem uma conta?</Text>
//       <TouchableOpacity onPress={() => navigation.navigate('cadastro')}>
//         <Text style={styles.textRegister}>Cadastrar-se</Text>
//       </TouchableOpacity>
//     </View>
//   </KeyboardAvoidingView>
// </TouchableWithoutFeedback>

// <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//   <View
//     style={styles.container}
//   >
//     {!isKeyboardVisible && (
//       <Image
//         source={require("../../assets/Slogan-removebg-preview.png")}
//         style={styles.image}
//       />
//     )}
//     <View style={[styles.container]}>
//       <Text style={styles.message}>{message}</Text>
//       <View style={styles.field}>
//         <Text style={styles.label}>Email</Text>
//         <TextInput
//           onChangeText={(value) => setEmail(value)}
//           placeholder="Email"
//           style={styles.input}
//           value={email}
//           autoCapitalize="none"
//         />
//       </View>

//       <View style={styles.field}>
//         <Text style={styles.label}>Senha</Text>
//         <TextInput
//           onChangeText={(value) => setPassword(value)}
//           placeholder="Senha"
//           style={styles.input}
//           secureTextEntry={!showPassword}
//           value={password}
//           autoCapitalize="none"
//         />
//         <Ionicons
//           onPress={() => setShowPassword(!showPassword)}
//           style={styles.eye}
//           name={showPassword ? "md-eye-off" : "md-eye"}
//         />
//       </View>

//       <View style={styles.field}>
//         <TouchableOpacity onPress={handleSubmit} style={styles.button}>
//           <Text style={styles.buttonText}>Entrar</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={[styles.field, styles.field1]}>
//         <Text style={styles.text}>Não tem uma conta?</Text>
//         <TouchableOpacity
//           onPress={() => alert("Navegação para Cadastro")}
//           style={styles.button1}
//         >
//           <Text style={styles.buttonText1}>Cadastrar-se</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   </View>
// </TouchableWithoutFeedback>
//   );
// };


