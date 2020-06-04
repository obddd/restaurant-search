import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        term: search,
        limit: 50,
        location: 'New York',
      },
    });
    setResults(response.data.businesses);
  };
  return (
    <View>
      <SearchBar
        search={search}
        onSearchChange={(newSearch) => setSearch(newSearch)}
        onSearchSubmit={() => searchApi()}
      />
      <Text>Search Screen</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
