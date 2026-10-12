
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';

import products from '../data/products';

export default function ProductScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Products</Text>

      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="contain"
            />

            <Text style={styles.name}>{item.name}</Text>

            <Text style={styles.price}>
              {item.price} €
            </Text>

            <Text style={styles.sizes}>
              Sizes: {item.sizes.join(', ')}
            </Text>
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
    paddingTop: 45,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginHorizontal: 12,
    marginBottom: 12,
  },
  list: {
    paddingBottom: 20,
  },
  itemContainer: {
    width: '50%',
    padding: 8,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  price: {
    fontSize: 15,
    marginTop: 4,
  },
  sizes: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});
