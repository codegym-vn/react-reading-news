import React from 'react';
import {StyleSheet, View, Text, Image, Button, TouchableHighlight, WebView} from 'react-native';
import Timestamp from './Timestamp';
import HTML from 'react-native-render-html';

const NewsDetail = (props) => {
    const {link, urlToImage, title, description, publishedAt} = props.detail;
    const {navigate} = props.navigate;
    console.log(props);
    return (
        <View>
            <Image
                source={{uri: urlToImage}}
                style={styles.image}
            />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{title}</Text>
                <Timestamp style={styles.published} dateTime={publishedAt}/>
                <HTML html={description} imagesInitialDimensions={{width: 300, height: 300}}/>
            </View>
            <TouchableHighlight style={styles.button} onPress={() => props.navigate('WebView', link)}>
                <Text style={styles.buttonText}>Đọc thêm</Text>
            </TouchableHighlight>
        </View>
    );
};

export default NewsDetail;

const styles = StyleSheet.create({
    contentContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
        width: null,
        height: null,
    },
    image: {
        aspectRatio: 1.5,
        width: '100%',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
    },
    published: {
        fontSize: 16,
        color: '#6C6C6C',
        marginBottom: 15,
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    buttonText: {
        color: '#d35400',
        fontSize: 16,
    }
});
