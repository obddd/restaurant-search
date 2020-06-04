import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  return (
    <View>
      <SearchBar
        search={search}
        onSearchChange={(newSearch) => setSearch(newSearch)}
        onSearchSubmit={() => console.log('Submitted!')}
      />
      <Text>Search Screen</Text>
      <Text>{search}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
