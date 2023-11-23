import React, { useEffect, useState } from "react";
import { View, Image, FlatList } from "react-native";
import { styles } from "./styles";

interface FlatListFilmsProps {
    list: Array<{
        poster_path: string
    }>
}

export default function FlatListSearch({ list }: FlatListFilmsProps) {
    return (
        <FlatList
            data={list}
            keyExtractor={(item, index) => `${index}`}
            numColumns={2}
            renderItem={({ item }) => {
                const uri = `https://image.tmdb.org/t/p/w342/${item.poster_path}`
                return (
                    <>
                        <View style={styles.container}>
                            <Image source={{ uri }} style={styles.container} />
                        </View>
                    </>
                )
            }}
        />


    );
};