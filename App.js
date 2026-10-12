
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';

import products from './src/data/products';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />

            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price} €</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  itemContainer: {
    width: '50%',
    padding: 8,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  price: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
  },
});
