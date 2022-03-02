import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

const StandedSearchbar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.container}
    />
  );
};

export default StandedSearchbar;

const styles = StyleSheet.create({
    container: {
    width: "80%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: "#FFF",
    }
})