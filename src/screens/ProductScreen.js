
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
      <Text style={styles.title}>Our Shoes</Text>

      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="contain"
            />

            <Text style={styles.name}>
              {item.name}
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
    backgroundColor: '#FFFFFF',
    paddingTop: 50,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 16,
  },

  list: {
    paddingHorizontal: 8,
    paddingBottom: 20,
  },

  product: {
    width: '50%',
    padding: 8,
    alignItems: 'center',
  },

  image: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 12,
  },
});
