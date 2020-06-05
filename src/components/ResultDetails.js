import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultDetails = ({ result }) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.text}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reveiws
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 230,
    height: 110,
    borderRadius: 4,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ResultDetails;
