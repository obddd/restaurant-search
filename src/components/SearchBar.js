import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ search, onSearchChange, onSearchSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.iconStyle} name="search" />
      <TextInput
        style={styles.inputStyle}
        value={search}
        onChangeText={(newSearch) => onSearchChange(newSearch)}
        onEndEditing={() => onSearchSubmit()}
        placeholder="Search"
      />
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
    alignItems: 'center',
  },
  inputStyle: {
    height: 40,
    flex: 1,
  },
  iconStyle: {
    marginHorizontal: 15,
    fontSize: 35,
  },
});

export default SearchBar;
