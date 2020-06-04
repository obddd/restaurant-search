import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term: search,
          limit: 50,
          location: 'New York',
        },
      });
      setResults(response.data.businesses);
      
    } catch (error) {
      setErrorMessage('Something went wrong!')
    }
  };
  return (
    <View>
      <SearchBar
        search={search}
        onSearchChange={(newSearch) => setSearch(newSearch)}
        onSearchSubmit={() => searchApi()}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
