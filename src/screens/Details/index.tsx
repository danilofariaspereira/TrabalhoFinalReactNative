import React, { useState } from "react";
import { Text, ScrollView, Image, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import ArrowIcon from '../../assets/leftArrowIcon.png'
import { useNavigation } from "@react-navigation/native";
import StarIcon from '../../assets/starIcon.png'

export default function Details({ route, navigation }) {
    const { filmDetails } = route.params;
    const uri = `https://image.tmdb.org/t/p/w342/${filmDetails.poster_path}`;
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const formatReleaseDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);

        return formattedDate.replace(/\//g, '-');
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image style={styles.iconHeader} source={ArrowIcon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.containerInfos}>
                    <View style={styles.imageInfos}>
                        <Image source={{ uri }} style={styles.image} />
                        <View style={styles.filmInfos}>
                            <View style={styles.titleDate}>
                                <Text style={styles.title}>{filmDetails.title}</Text>
                                <Text style={styles.text}>{formatReleaseDate(filmDetails.release_date)}</Text>
                            </View>
                            <View style={styles.containerStar}>
                                <Image source={StarIcon} style={styles.iconStar} />
                                <Text style={styles.text}>{filmDetails.vote_average}</Text>
                            </View>
                            <View style={styles.genre}>
                                {filmDetails.genres.map((genre, index) => (
                                    <View key={index} style={styles.containerGenre}>
                                        <Text key={index} style={styles.text}>{genre.name}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </View>
                    <View style={styles.description}>
                        <View style={styles.containerTitleDescription}>
                            <Text style={styles.titleDescription}>Descrição</Text>
                        </View>
                        <Text style={styles.text}>{filmDetails.overview}</Text>
                    </View>
                </View>
            </ScrollView>
        </View >
    );
};