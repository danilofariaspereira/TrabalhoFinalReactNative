import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { styles } from "./styles";
import Logo from "../../assets/logoApp.png";

interface MenuBurgerProps {
  options: string[];
}

const MenuBurger: React.FC<MenuBurgerProps> = ({ options }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleMenu}>
        <Entypo name="menu" size={30} color="#FFA500" />
      </TouchableOpacity>
      {isMenuOpen && (
        <View style={styles.menuOnPress}>
          {options.map((option, index) => (
            <Text key={index} style={styles.menuOption}>
              {option}
            </Text>
          ))}
        </View>
      )}
       <View style={styles.img}>
            <Image source={Logo} style={styles.logo} />
          </View>
          </View>
  );
};

export default function Header() {
  const menuOptions = ["Procurar", "Usuario", "Sair"]; // Substitua com suas opções reais
  return <MenuBurger options={menuOptions} />;
}
