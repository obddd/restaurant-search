import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultDetails from '../components/ResultDetails'

const ResultList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <ResultDetails result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:15
  },
  container:{
    marginBottom: 10
  }
});

export default ResultList;
