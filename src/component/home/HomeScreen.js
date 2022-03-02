import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types'
import StandedSearchbar from '../../controllers/searchBar/searchbar';
import StandedSectionList from '../../controllers/sections/sectionList';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = props => {

const showAll = () => {
  // props.navigation.navigate(homeScreen, {})
}

  return (
    <View style={styles.container}>
      <StandedSearchbar />
      <View style={styles.textView}>
        <Text style={styles.textLeft}>Latest News</Text>
        <Text onPress={() => showAll()} style={styles.textRight}>See All <Icon name="long-arrow-right" size={25} color="#0000ff" /> </Text>
      </View>
      <SafeAreaView style={{ flex: 1 }}>
        <StandedSectionList {...props}/>
      </SafeAreaView>
    </View>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  textView:{
    marginVertical: 20,
    margin: 10, 
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  textLeft:{
    fontSize: 20, 
    fontWeight: 'bold',
    color: '#000000',
    alignItems: 'flex-start'
  },
  textRight:{
    fontSize: 20, 
    fontWeight: 'bold',
    color: '#0000ff',
    alignItems: 'flex-end'
  }
  ,
  rightArrow:{
    fontSize: 20, 
    fontWeight: 'bold',
    color: '#0000ff',
    alignItems: 'flex-end'
  }
})