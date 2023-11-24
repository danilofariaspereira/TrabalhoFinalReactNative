import { View, ScrollView, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import React, { useEffect, useState } from 'react';
import { Filmes } from "../../components/Filmes";
import { getGenres, getGenresFilms, getSearchFilms } from "../../services/apiTMDB";
import Header from "../../components/Header";
import { Carousel } from "../../components/Carousel";

export default function Home({ navigation }) {
    const [listGenres, setListGenres] = useState([]);
    const [listFilmsGenres, setListFilmsGenres] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isSearch, setIsSearch] = useState<boolean>(false);
    const [listFilmsSearch, setListFilmsSearch] = useState([]);

    useEffect(() => {
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
        } else {
            setIsSearch(false)
        }
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
        const filmWithGenres = {
            ...selectedFilm,
            genres: listGenres.filter(genre => selectedFilm.genre_ids.includes(genre.id)),
        };
        navigation.navigate('details', { filmDetails: filmWithGenres });
    }

    function listDetailsFilmsSearch(filmIndex) {
        const selectedFilm = listFilmsSearch[filmIndex];
        navigation.navigate('details', { filmDetails: selectedFilm });
    }

    return (
        <View style={styles.container}>
            <Header onSearch={onSearch} />
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
                                <Carousel />
                                {listGenres.map((item, index) => {
                                    const genre = item.name
                                    const filmsForGenre = listFilmsGenres[index];

                                    return (
                                        <View key={`${item.id}`}>
                                            {filmsForGenre && (
                                                <Filmes list={filmsForGenre} onPress={(filmIndex) => listDetailsFilms(index, filmIndex)} genre={genre} />
                                            )}
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