import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { PrimaryButton } from "../../components/PrimaryButton";

export default function Welcome({ navigation }) {
  const onPress = () => {
    navigation.navigate('login')
  };

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../../assets/LogoApp1.png")}
          style={styles.image}
        />
        <View style={styles.field}>
          <Text style={styles.heading}>Bem-vindo</Text>
          <Text style={styles.heading}>à nossa comunidade!</Text>
          <Text style={styles.text}>
            Agradecemos por baixar nosso aplicativo e não esqueça de nos
            avaliar.
          </Text>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={onPress} title="Continuar" />
        </View>
      </View>

    </>
  );
}
