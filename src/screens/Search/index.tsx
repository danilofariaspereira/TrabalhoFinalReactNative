import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Search({ navigation }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log(`Pesquisando: ${searchText}`);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/LogoApp1.png")}
        style={styles.image}
      />
      <View style={styles.field}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setSearchText(text)}
            placeholderTextColor="#DCDCDC"
            placeholder="Busque o Filme desejado"
          />
        </View>
        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Pesquisar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
