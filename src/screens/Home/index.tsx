import { View, Image, Text, ScrollView, ActivityIndicator } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import React, { useEffect, useRef, useState } from 'react';
import Carousel from 'react-native-snap-carousel';
import { Filmes } from "../../components/Filmes";
import { getGenres, getGenresFilms, getTrendingFilms } from "../../services/apiTMDB";

export default function Home({ navigation }) {
    const [listTrending, setListTrendings] = useState([]);
    const [listGenres, setListGenres] = useState([]);
    const [listFilmsGenres, setListFilmsGenres] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        listTrendingFilms();
        listByGenres();
    }, [])

    function listTrendingFilms() {
        getTrendingFilms()
            .then(response => {
                setListTrendings(response.data.results)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    function listByGenres() {
        getGenres()
            .then(async response => {
                setListGenres(response.data.genres);

                const promises = response.data.genres.map(async genre => {
                    try {
                        const filmsResponse = await getGenresFilms(genre.id);
                        return filmsResponse.data.results;
                    } catch (error) {
                        console.log(error);
                        return [];
                    }
                });

                const filmsForGenres = await Promise.all(promises);
                setListFilmsGenres(filmsForGenres);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    function listDetailsFilms(genreIndex, filmIndex) {
        const selectedFilm = listFilmsGenres[genreIndex][filmIndex];
        navigation.navigate('details', { filmDetails: selectedFilm });
    }

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                {isLoading ?
                    <ActivityIndicator size={"large"} color={'#156'} />
                    :
                    <>
                        {listGenres.map((item, index) => {
                            const genre = item.name
                            return (
                                <View key={`${item.id}`}>
                                    <Filmes list={listFilmsGenres[index]} onPress={(filmIndex) => listDetailsFilms(index, filmIndex)} genre={genre} />
                                </View>
                            )
                        })}
                    </>
                }
            </ScrollView>
        </View>
    );
}