
import React, { useState } from 'react'
import { AsyncStorage } from 'react-native';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { homeScreen, registrationScreen } from '../../routerNavigation/router'
import PropTypes from 'prop-types'

const LoginScreen = props => {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const addUsername = (value) => {
        setUserName(value)
    }

    const addPassword = (value) => {
        setPassword(value)
    }

    const checkUser = async () => {
        try {
            const value = await AsyncStorage.getItem('user')
            if (value) {
                responseUser = JSON.parse(value)
                if (responseUser.username === username && responseUser.password === password) {
                    return true
                }
            }
            return false
        } catch (e) {
        }
    }

    const login = async () => {
        const isValied = await checkUser()
        if (isValied) {
            props.navigation.navigate(homeScreen, {})
        }
    }

    const register = () => {
        props.navigation.navigate(registrationScreen, {})
    }

    return (
        <View style={styles.container}>
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

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={register}>
                <Text style={styles.forgot_button}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={login}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

LoginScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default LoginScreen;


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