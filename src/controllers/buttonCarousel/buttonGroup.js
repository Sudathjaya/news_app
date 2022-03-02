import React, { useState, useRef, useEffect } from 'react';
import { Text, View, Dimensions, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { getNewsSource } from '../../services/newsServices';

export const SLIDER_WIDTH = Dimensions.get('window').width + 1;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);



let newsCategoryData

const StandButtonGroup = () => {
    const [index, setIndex] = useState(0);
    const [newsSource, setNewsSource] = useState([]);
    const isCarousel = useRef(null);
    const [isLoading, setLoading] = useState(true);
    const selectedCategory = useRef(0)

    useEffect(() => {
        getData();
    }, []);

    
const onPress = (index) => {
    selectedCategory.current = index
}

    const getData = async () => {
        try {
            const newsCategory = await getNewsSource();
            setNewsSource(newsCategory.sources)
            const newArray = [];
            newsCategory.sources.forEach((obj, i)=> {
                obj.index = i
                if (!newArray.some(o => o.category === obj.category)) {
                    newArray.push({ ...obj })
                }
                newsCategoryData = newArray
            });

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }


    const ButtonSet = ({ item }) => {
        return (
            <TouchableOpacity key={`${item.id}`} onPress={() => onPress(item.index)} style={
                selectedCategory.current === item.index ? styles.activeBtn : styles.btn}>
                <Text>{item.category}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ marginVertical: 10 }}>
            <FlatList
                horizontal
                pagingEnabled={false}
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
                data={newsCategoryData}
                renderItem={({ item }) => {
                    return <ButtonSet item={item} />;
                }}

                style={styles.container}
            />
        </View>
    );
};

export default StandButtonGroup;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        width: 'auto',
        height: 50,

    },
    btn: {
        width: 100,
        height: 30,
        color: '#000000',
        borderWidth: 1,
        borderColor: '#dcdcdc',
        borderRadius: 20,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 35
    },
    activeBtn:{
        width: 100,
        height: 30,
        color: '#FFF',
        borderWidth: 1,
        borderColor: '#dcdcdc',
        borderRadius: 20,
        backgroundColor: '#FF1493',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 35 
    }
})