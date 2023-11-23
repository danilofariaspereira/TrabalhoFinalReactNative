import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

interface TextInputProps {
  title: string
  value: string
  secureContent?: boolean
  editable?: boolean
  onChangeText: React.Dispatch<React.SetStateAction<string>>
  onPress?: React.Dispatch<React.SetStateAction<boolean>>
}

export const InputTextLogin = ({ title, value, editable, secureContent, onChangeText, onPress }: TextInputProps) => {
  return (
    title === "Senha" || title === "Confirmar Senha" ? (
      <View>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          placeholder={title}
          placeholderTextColor={'#424242'}
          style={styles.input}
          secureTextEntry={!secureContent}
          value={value}
          autoCapitalize="none"
          onChangeText={onChangeText}
                 />
        <Ionicons
          onPress={() => onPress(!secureContent)}
          style={styles.eye}
          name={secureContent ? "md-eye" : "md-eye-off"}
        />
      </View>
    ) : (
      <View>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          placeholder={title}
          placeholderTextColor={'#424242'}
          style={styles.input}
          value={value}
          autoCapitalize="none"
          onChangeText={onChangeText}
          editable={editable}
           
        />
      </View>
    )
  )
}
