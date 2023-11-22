import { View, Image, Text, ScrollView } from "react-native";
import Header from "../../components/Header/index";
import { styles } from "./styles";
import React, { useRef, useState } from 'react';
import Carousel from 'react-native-snap-carousel';
import Filmes from "../../components/Filmes/index";

export default function Home() {
    const data = [
        { id: '1', source: require('../../assets/aquaman.jpg') },
        { id: '2', source: require('../../assets/cinepop.jpg') },
        { id: '3', source: require('../../assets/animes.png') },
        { id: '4', source: require('../../assets/serie.jpg') },
    ];

    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const renderItem = ({ item }) => (
        <Image source={item.source} style={styles.image} />
    );    return (
        <>
            <View style={styles.container}>
                <Header/>
            <ScrollView>
                <View style={styles.filmes}>
                    <View style={styles.carousel}>
                    <Carousel
                        ref={carouselRef}
                        data={data}
                        renderItem={renderItem}
                        sliderWidth={400}
                        itemWidth={400}
                        onSnapToItem={(index) => setCurrentIndex(index)}
                        autoplay={true}
                        autoplayInterval={8000}
                        loop={true}
                        />
                    </View>
                    <View style={styles.lancamento}>
                    <Filmes/>
                    </View>
                    </View>
         </ScrollView>
            </View>
        </>
    );
}