import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";
import Claquete from '../../assets/claquete.gif'

export default function ImageClaquete() {
    return (
        <Image source={Claquete} style={styles.image}/>
    );
}