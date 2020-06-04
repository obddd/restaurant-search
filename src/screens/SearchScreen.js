import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [results, errorMessage, searchApi] = useResult();

  const filterResultsByPrice = (price) => {
    return results.filter( result => {
      return result.price === price;
    })
  };
  
  return (
    <View>
      <SearchBar
        search={search}
        onSearchChange={(newSearch) => setSearch(newSearch)}
        onSearchSubmit={() => searchApi(search)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultList results={filterResultsByPrice('$')} title='Cost Effective' />
      <ResultList results={filterResultsByPrice('$$')} title='Bit Pricier' />
      <ResultList results={filterResultsByPrice('$$$')} title='Big Spender' />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
