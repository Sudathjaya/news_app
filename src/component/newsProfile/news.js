import * as React from 'react';
import { Avatar } from 'react-native-paper';
import PropTypes from 'prop-types'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useNavigationParams } from '../../common/common';
import { homeScreen } from '../../routerNavigation/router';
import Icon from 'react-native-vector-icons/FontAwesome';


const SingleNewsScreen = props => {

    const openNews = () => {
        props.navigation.navigate(homeScreen, {})
    }

    const LeftContent = props => {
        return (
            <TouchableOpacity onPress={() => openNews()}>
                <View style={styles.backBtn}>
                    <Icon name="angle-left" size={50} color="#dcdcdc" />
                </View >
            </TouchableOpacity>
        )
    }


    const navParams = useNavigationParams();
    console.log('navParams?.content', navParams?.news?.source?.name);
    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: navParams?.news?.uri }} style={styles.avatar}>
                <LeftContent />
                <View style={styles.topCard}>
                    <Text style={styles.textView3}>
                        {navParams?.news?.publishedAt}
                    </Text>
                    <Text style={styles.textView4}>
                        {navParams?.news?.title}
                    </Text>
                    <Text style={styles.textView3}>
                        {navParams?.news?.author}
                    </Text>
                </View>

            </ImageBackground>
            <View style={styles.content}>
                <Text style={styles.textView}>
                    {navParams?.news?.source?.name}
                    <Text style={styles.textView}> - </Text>
                </Text>
                <Text style={styles.textView2}>
                    {navParams?.news?.content}
                </Text>
            </View>
        </View>
    )
}

SingleNewsScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default SingleNewsScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dcdcdc',
        height: '100%'
    },
    avatar: {
        height: 350,
        overflow: 'hidden',
        padding: 0,
        margin: 0,
        // zIndex: 1,
        paddingEnd: 20,
    },
    content: {
        height: '100%',
        // borderTopRightRadius: 20,
        // borderTopLeftRadius: 20,
        borderWidth: 1,
        borderColor: "#FFdsdfF",
        backgroundColor: '#FFF',
        zIndex: 1,
        // position: 'absolute',
        // top: 310,
        // right: 30
    },

    textView: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000000',
        margin: 10
    },
    textView2: {
        fontSize: 13,
        fontWeight: 'normal',
        color: '#000000',
        margin: 10
    },
    topCard: {
        height: 130,
        width: 250,
        backgroundColor: '#696969',
        borderRadius: 20,
        opacity: 0.8,
        position: 'absolute',
        top: 210,
        left: 80,
        zIndex: 20,
        overflow: 'hidden'

    },
    textView3: {
        fontSize: 9,
        fontWeight: 'normal',
        color: '#000000',
        margin: 10
    },
    textView4: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000000',
        margin: 10,
        justifyContent: 'space-around'
    },

    backBtn:{
        margin: 20
    }
})