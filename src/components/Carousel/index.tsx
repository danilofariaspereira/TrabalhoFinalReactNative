import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, Image } from 'react-native';
import { styles } from './styles';

const DATA = [
  { image: require('../../assets/Jung.png') },
  { image: require('../../assets/Abracadabra.png') },
  { image: require('../../assets/Megan.png') },
  { image: require('../../assets/Aquaman.png') },
  { image: require('../../assets/Horton.png') },
  { image: require('../../assets/Awareness.png') },
  { image: require('../../assets/DeathNote.png') },
  { image: require('../../assets/Dune.png') },
  { image: require('../../assets/JohnWick.png') },
  { image: require('../../assets/Jujutsu.png') },
  { image: require('../../assets/Hobbit.png') },
  { image: require('../../assets/OlhosFamintos.png') },
];

export const Carousel = () => {
  const [activeBanner, setActiveBanner] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);

  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems[0] !== undefined) {
      setActiveBanner(viewableItems[0]?.index);
    }
  };

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        itemVisiblePercentThreshold: 70,
      },
      onViewableItemsChanged,
    },
  ]);

  useEffect(() => {
    const totalBanners = DATA.length;
  
    const handleCarouselLoop = () => {
      if (activeBanner === totalBanners - 1) {
        flatListRef.current?.scrollToIndex({
          index: 0,
          animated: true,
        });
        setActiveBanner(0);
      } else {
        flatListRef.current?.scrollToIndex({
          index: activeBanner + 1,
          animated: true,
        });
        setActiveBanner((old) => old + 1);
      }
    };
  
    const timeoutId = setTimeout(handleCarouselLoop, 3000);
  
    return () => clearTimeout(timeoutId);
  }, [activeBanner]);

  return (
    <View style={styles.container}>
      <View style={styles.flatListImage}>
        <FlatList
          ref={flatListRef}
          data={DATA}
          renderItem={({ item, index }) => (
            <Image source={item.image} style={styles.cardImage} resizeMode="stretch" />
          )}
          pagingEnabled
          viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
          horizontal
          keyExtractor={(item, index) => String(index)}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};