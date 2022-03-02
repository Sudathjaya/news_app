import React, { useState, useRef, useEffect } from 'react';
import { Text, View, Dimensions, Image, ImageBackground, SectionList, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { newsScreen } from '../../routerNavigation/router';
import { getAllNews, getLatesNews } from '../../services/newsServices';
import StandButtonGroup from '../buttonCarousel/buttonGroup';
import PropTypes from 'prop-types'

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);


let latestNewsData
let topNewsData
const StandedSectionList = props => {
    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [latestNews, setLatestNews] = useState([]);
    const [topNews, setTopNews] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const latestNews = await getLatesNews();
            const topNews = await getAllNews();
            setLatestNews(latestNews.articles);
            setTopNews(topNews.articles);
            latestNewsData = latestNews.articles
            topNewsData = topNews.articles
            await setSectionData();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const openNews = (item) => {
        props.navigation.navigate(newsScreen, {news: item} )
    }
    const setSectionData = async () => {
        const SECTIONS = []
        const temArray = latestNewsData.map((item, index) => {
            return obj = {
                key: index,
                author: item.author,
                title: item.title,
                description: item.description,
                uri: item.urlToImage,
                publishedAt: item.publishedAt,
                content: item.content,
                source: item.source
            }
        })
        SECTIONS.push({
            title: 'Latest News',
            horizontal: true,
            data: temArray
        })

        const temArray2 = topNewsData.map((item, index) => {
            return obj = {
                key: index,
                author: item.author,
                title: item.title,
                description: item.description,
                uri: item.urlToImage,
                publishedAt: item.publishedAt,
                content: item.content,
                source: item.source
            }
        })

        SECTIONS.push({
            title: 'Latest News',
            data: temArray2
        })
        setData(SECTIONS)
    }

    const ListItem = ({ item }) => {
        return (
            <View
                style={styles.item}>
                <TouchableOpacity onPress={() => openNews(item)}>
                    <ImageBackground source={{ uri: item.uri }} style={styles.itemPhoto}>
                        <Text style={{ marginVertical: 10, marginLeft: 10, marginRight: 10, fontSize: 15, fontWeight: 'bold', color: '#FFF' }}>
                            by {item.author}
                        </Text>
                        <Text style={{ marginVertical: 10, marginLeft: 10, marginRight: 10, fontSize: 18, fontWeight: 'bold', color: '#FFF' }}>
                            {item.title}
                        </Text>
                        <Text style={{ marginVertical: 10, marginLeft: 10, marginRight: 10, fontSize: 15, fontWeight: 'bold', color: '#FFF' }}>
                            {item.description}
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        );
    };

    const ListItem2 = ({ item }) => {
        return (
            <View
                style={styles.item2}>
                    <TouchableOpacity onPress={() => openNews(item)}  >
                <ImageBackground source={{ uri: item.uri }} style={styles.itemPhoto2}>
                    <Text style={{ marginVertical: 10, marginLeft: 10, marginRight: 10, fontSize: 18, fontWeight: 'bold', color: '#FFF' }}>
                        {item.title}
                    </Text>
                    <View style={styles.textView}>
                        <Text style={styles.textLeft}> {item.author}</Text>
                        <Text style={styles.textRight}> {item.publishedAt}</Text>
                    </View>
                </ImageBackground>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={{ marginVertical: 10 }}>
            {isLoading ? <ActivityIndicator size='large' style={styles.loading} /> : (
                <SectionList
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                    stickySectionHeadersEnabled={false}
                    sections={data}
                    renderSectionHeader={({ section }) => (
                        <>
                            {section.horizontal ? (
                                <>
                                    <FlatList
                                        horizontal
                                        data={section.data}
                                        renderItem={({ item }) => <ListItem item={item} />}
                                        showsHorizontalScrollIndicator={false} />
                                    <StandButtonGroup />
                                </>
                            ) : null}
                        </>
                    )}
                    renderItem={({ item, section }) => {
                        if (section.horizontal) {
                            return null;
                        }
                        return <ListItem2 item={item}/>;
                    }}
                />
            )}
        </View>
    );
};

StandedSectionList.propTypes = {
    navigation: PropTypes.object.isRequired,
  };

export default StandedSectionList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    sectionHeader: {
        fontWeight: '800',
        fontSize: 18,
        color: '#f4f4f4',
        marginTop: 20,
        marginBottom: 5,
    },
    item: {
        margin: 10,
        borderWidth: 0.5,
        padding: 0,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
        overflow: 'hidden',
        borderColor: '#d3d3d3',
    },
    item2: {
        margin: 10,
        borderWidth: 0.5,
        padding: 0,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
        overflow: 'hidden',
        borderColor: '#d3d3d3',
        width: 350,
    },
    itemPhoto: {
        width: 350,
        height: 220,
        borderRadius: 20
    },
    itemPhoto2: {
        width: 350,
        height: 170,
        borderRadius: 20,
        padding: 0,
    },
    itemText: {
        color: 'rgba(255, 255, 255, 0.5)',
        marginTop: 5,
    },
    loading: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: "center"
    },
    textLeft: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#FFF',
        alignItems: 'flex-start'
    },
    textRight: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#FFF',
        alignItems: 'flex-end'
    },
    textView: {
        marginVertical: 20,
        margin: 10,
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
});