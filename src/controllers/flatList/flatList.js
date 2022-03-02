import React, { useEffect, useRef, useState } from 'react'
import {Text, View, Dimensions,FlatList, Image} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const UmStandedFlatList = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View
            style={{
              borderWidth: 1,
              padding: 20,
              borderRadius: 20,
              alignItems: 'center',
              backgroundColor: 'white',
            }}>
            <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png'}} 
            style={{width: 200, height: 100}} />
            <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold'}}>
              {item.title}
            </Text>
          </View>

          )}
        />
      )}
    </View>
  );
  
}

export default  UmStandedFlatList