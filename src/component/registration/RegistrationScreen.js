import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { AsyncStorage } from 'react-native';
import PropTypes from 'prop-types'
import { loginScreen } from '../../routerNavigation/router'

const RegistrationScreen = props => {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')


   const submit = () => {
        try {
            const obj = {
                username: username,
                password: password
            }
            AsyncStorage.setItem('user', JSON.stringify(obj));
            props.navigation.navigate(loginScreen, {})
        } catch (error) {
            // Error retrieving data
        }
    }

    const addUsername = (value) => {
        setUserName(value)
    }

    const addPassword = (value) => {
        setPassword(value)
    }

    return (
        // <View style={styles.container}>
        //     <Text>Registrtion</Text>
        //     <View>
        //         <TextInput
        //             placeholder="Enter email"
        //             onChangeText={addUsername}
        //         /></View>
        //     <View style={styles.inputView}>
        //         <TextInput
        //             placeholder="Enter Password"
        //             onChangeText={addPassword}
        //         />
        //     </View>
        //     <TuchableOpacity style={styles.loginBtn}  onPress={registrtion}>
        //         <Text>Register</Text>
        //     </TuchableOpacity>
        // </View>

                //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //     <Text>Home Screen</Text>
        //   </View>
        <View style={styles.container}>
            {/* <Image style={styles.image} source={require("./assets/log2.png")} /> */}

            {/* <StatusBar style="auto" /> */}
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Username"
                    placeholderTextColor="#003f5c"
                    onChangeText={(user) => addUsername(user)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => addPassword(password)}
                />
            </View>
            <TouchableOpacity  style={styles.loginBtn} onPress={submit}>
                <Text style={styles.loginText}>Submit</Text>
            </TouchableOpacity>

        </View>
    )
}

RegistrationScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
  };

export default RegistrationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 40,
    },

    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,

        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
    },
})