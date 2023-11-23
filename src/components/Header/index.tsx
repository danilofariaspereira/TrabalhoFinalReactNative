import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { styles } from "./styles";
import Logo from "../../assets/LogoApp1.png"
import { getSearchFilms } from "../../services/apiTMDB";
import FlatListSearch from "../FlatListSearch";
import Lupa from '../../assets/lupa.png'


interface HeaderProps {
  onSearch:(text) => void
}


export default function Header({onSearch}: HeaderProps) {
  const [searchText, setSearchText] = useState("");
  const [listFilms, setListFilms] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  function listSearchFilms(research) {
    getSearchFilms(research)
      .then(response => {
        setListFilms(response.data.results)
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  function search(text){
    setSearchText(text)
    onSearch(text)
        
  }

  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image source={Logo} style={styles.logo} resizeMode="cover" />
        <FlatListSearch list={listFilms} />
      </View>
      <View style={styles.search}>
        <TextInput
          placeholder='Pesquise um filme'
          placeholderTextColor='#d4d5d7'
          keyboardType="default"
          textAlignVertical='center'
          style={styles.input}
          onChangeText={(text) => search(text)}
        // value={value}
        // autoCapitalize="none"
        // onChangeText={onChangeText}
        // editable={editable} 
        />
        <TouchableOpacity onPress={() => listSearchFilms(searchText)}>
          <Image source={Lupa} style={styles.icon} />
        </TouchableOpacity>
      </View>

    </View >
  );
};

