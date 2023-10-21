import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, Button, StyleSheet } from 'react-native';
import { fetchImages } from './api';

const ImageList = ({ query }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadImages();
  }, [query, page]);

  const loadImages = () => {
      fetchImages(query, page).then((response) => {
      setImages(response.data.photos);
    });
  };

  // Function to render a single image card
  const renderImageCard = ({ item }) => (
    <View style={styles.imageCard}>
      <Image source={{ uri: item.src.medium }} style={styles.image} />
      <Text>{item.photographer}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Display two images per row
        renderItem={renderImageCard}
      />
      <Button title="Load More" onPress={() => setPage(page + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageCard: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default ImageList;
