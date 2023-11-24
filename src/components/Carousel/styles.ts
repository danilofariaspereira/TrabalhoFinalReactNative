// styles.ts
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    height: 250
  },
  flatListImage: {
    height: 220,
    marginBottom: 10
  },
  cardImage: {
    width: width,
    height: 220,
  },
});
