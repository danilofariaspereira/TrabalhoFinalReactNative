import { View, Image, Text, ScrollView, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import React, { useEffect, useRef, useState } from 'react';
import Carousel from 'react-native-snap-carousel';
import { Filmes } from "../../components/Filmes";
import { getGenres, getGenresFilms, getSearchFilms, getTrendingFilms } from "../../services/apiTMDB";
import Header from "../../components/Header";
import Search from "../Search";

export default function Home({ navigation }) {
    const [listTrending, setListTrendings] = useState([]);
    const [listGenres, setListGenres] = useState([]);
    const [listFilmsGenres, setListFilmsGenres] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isSearch, setIsSearch] = useState<boolean>(false);
    const [listFilmsSearch, setListFilmsSearch] = useState([]);

    useEffect(() => {
        listTrendingFilms();
        listByGenres();
    }, [])

    const onSearch = (searchTerm: string) => {
        if (searchTerm.length > 0) {
            setIsSearch(true)

            getSearchFilms(searchTerm).then(response => {
                setListFilmsSearch(response.data.results)
            })
            .catch(error => {
                console.log(error);
            })
        }else{
            setIsSearch (false)
        }
    }

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

    function listDetailsFilmsSearch(filmIndex) {
        const selectedFilm = listFilmsSearch[filmIndex];
        navigation.navigate('details', { filmDetails: selectedFilm });
    }

    


    return (
        <View style={styles.container}>
            <Header onSearch={onSearch}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                {isLoading ?
                    <ActivityIndicator size={"large"} color={'#156'} />
                    :
                    <>
                    
                    {isSearch ?
                    <View >
                        <Filmes list={listFilmsSearch} onPress={(filmIndex) => listDetailsFilmsSearch(filmIndex)} genre={"Busca"} />
                    </View>
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
                        
                    </>
                }
            </ScrollView>
        </View>
    );
}