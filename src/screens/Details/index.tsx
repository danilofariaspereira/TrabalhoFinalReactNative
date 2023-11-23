import React, { useState } from "react";
import { Text, ScrollView, Image, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import ArrowIcon from '../../assets/leftArrowIcon.png'
import { useNavigation } from "@react-navigation/native";

export default function Details({ route, navigation }) {
    const { filmDetails } = route.params;
    const uri = `https://image.tmdb.org/t/p/w342/${filmDetails.poster_path}`;
    const [isLoading, setIsLoading] = useState<boolean>(true);

    return (
        <>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={styles.iconHeader} source={ArrowIcon} />
            </TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.imageInfos}>
                    <Image source={{ uri }} style={styles.image} />
                    <View>
                        <Text style={styles.title}>{filmDetails.title}</Text>
                        <Text style={styles.text}>{filmDetails.release_date}</Text>
                        <Text style={styles.text}>{filmDetails.vote_average}</Text>
                    </View>
                </View>
                <View style={styles.description}>
                    <Text style={styles.title}>Descrição</Text>
                    <Text style={styles.text}>{filmDetails.overview}</Text>
                </View>
            </View>

        </>
    );
};