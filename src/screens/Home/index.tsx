import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function Home({navigation}) {
    return (
        <>
            <View >
                <Image
                    source={require("../../assets/Slogan-removebg-preview.png")}
                />
                <View>
                    <View >
                        <Text >Filmes On-line aqui</Text>
                        <Text >
                            Aqui é a página onde tudo começa!!
                        </Text>
                    </View>
                    <View >
                        <TouchableOpacity
                            onPress={() => alert("Em construção!")}
                            
                        >
                            <Text >Assistir</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
};