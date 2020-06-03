import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" size={30} color="black" />
      <TextInput style={styles.inputStyle} placeholder='Search'/>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputStyle: {
      height: 40,
      flex: 1
  }
});

export default SearchBar;
