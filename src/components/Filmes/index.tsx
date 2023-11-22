import { View, Image, Text, ScrollView } from "react-native";
import { styles } from "./styles";

export default function Filmes() {

  const data = [
    {
      id: "1",
      filme: "Top Gun Maverick",
      image: require('../../assets/melhores-filmes-2023-topgun.jpg'),
    },
    {
      id: "2",
      filme: "Top Gun Maverick",
      image: require('../../assets/melhores-filmes-2023-topgun.jpg'),
    },
    {
      id: "3",
      filme: "Top Gun Maverick",
      image: require('../../assets/melhores-filmes-2023-topgun.jpg'),
    },
    {
      id: "4",
      filme: "Top Gun Maverick",
      image: require('../../assets/melhores-filmes-2023-topgun.jpg'),
    },
    {
      id: "5",
      filme: "Top Gun Maverick",
      image: require('../../assets/melhores-filmes-2023-topgun.jpg'),
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.filmes}>
      <Text style={styles.text}>Assista a Filmes Gratuitos</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        style={styles.scrollView}
      >
        {data.map((item) => (
          <View key={item.id} style={styles.movieContainer}>
            <Image source={item.image} style={styles.movieImage} />
            <Text style={styles.movieText}>{item.filme}</Text>
          </View>
        ))}
      </ScrollView>
      </View>
    </View>
  )
}