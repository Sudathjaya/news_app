import React, { useState, useEffect } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/component/home/HomeScreen';
import LoginScreen from './src/component/login/LoginScreen';
import RegistrationScreen from './src/component/registration/RegistrationScreen';
import SingleNewsScreen from './src/component/newsProfile/news';
import { AsyncStorage } from 'react-native';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};


const UIApp = () => {
  const [signedIn, setSignedIn] = useState(null);
  let responseUser = null
  useEffect(() => {
    checkUser()
  }, []);

  async function checkUser(){
    try {
      const value = await AsyncStorage.getItem('user')
      if (value) {
        responseUser = JSON.parse(value)
      } 
    } catch (e) {
    }
    setSignedIn(responseUser);
  }

  return (
    <NavigationContainer>
      {signedIn != null ? (
        <Stack.Navigator initialRouteName="homeScreen" screenOptions={{headerTitleAlign: 'center'}}>
          <Stack.Screen name="homeScreen" component={HomeScreen} options={{headerShown:false}}/>
          <Stack.Screen name="newsScreen" component={SingleNewsScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="loginScreen" screenOptions={{headerTitleAlign: 'center'}}>
          <Stack.Screen name="loginScreen" component={LoginScreen} />
          <Stack.Screen name="homeScreen" component={HomeScreen} options={{headerShown:false}}/>
          <Stack.Screen name="registrationScreen" component={RegistrationScreen} />
          <Stack.Screen name="newsScreen" component={SingleNewsScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}

export default UIApp;