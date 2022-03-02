import  React, { useEffect, useState } from 'react';
import { AsyncStorage } from '@react-native-async-storage/async-storage'
import AuthStack from '../src/routerNavigation/AuthStack';
import AppStack from '../src/routerNavigation/AppStack';
import HomeScreen from '../src/component/home/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const BaseApp = async () => {

    const [user, setUser] = useState({})

    let toRender

    useEffect(() => {
        const getData = async () => {
            try {
                let userCredintials = {}
                const value = await AsyncStorage.getItem('user')
                if (value) {
                    userCredintials = JSON.parse(value)
                    setUser(userCredintials)
                    toRender = <AppStack />
                } else {
                    toRender = <AuthStack />
                }  
            } catch (e) {
            }
        }
        getData()
    }, []);

    return (
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default BaseApp;