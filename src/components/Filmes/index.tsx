import { View, Image, Text, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface FlatListFilmsProps {
  list: Array<{
    poster_path: string
    title: string
  }>
  onPress?: (index: number) => void;
  genre: string
}

export const Filmes = ({ list, onPress, genre }: FlatListFilmsProps) => {
  const limitedList = list.slice(0, 5);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.title}>{genre}</Text>
        </View>
        <FlatList
          data={limitedList}
          keyExtractor={(item, index) => `${index}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            const uri = `https://image.tmdb.org/t/p/w342/${item.poster_path}`
            return (
              <View>
                <TouchableOpacity onPress={() => onPress && onPress(index)}>
                  <Image source={{ uri }} style={styles.image} />
                </TouchableOpacity>
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.text} >{item.title}</Text>
              </View>
            )
          }}
        />
      </View>
    </>
  )
}