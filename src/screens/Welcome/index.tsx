import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

export default function Welcome({ navigation }) {
   
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../../assets/LogoApp1.png")}
          style={styles.image}
        />
        <View>
          <View style={styles.field}>
            <Text style={styles.heading}>Bem-vindo à nossa comunidade!</Text>
            <Text
              style={[
                styles.text,
                { paddingVertical: 10, lineHeight: 25 },
              ]}
            >
              Agradecemos por baixar nosso aplicativo e não esqueça de nos
              avaliar.
            </Text>
          </View>
          <View style={styles.field}>
            <TouchableOpacity
              onPress={() => navigation.navigate('login')}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
