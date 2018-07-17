import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight, Platform, Image} from 'react-native';
import Timestamp from './Timestamp';

const isIOS = Platform.OS === 'ios';

const NewsListItem = (props) => {
    console.log(props);
    return (
        <TouchableHighlight onPress={() => props.onPress(props.item)}>
            <View style={{ flex: 1, flexDirection: 'row', borderWidth: 0.5 }}>
                <View>
                    <Image
                        style={{width: 70, height: 70, marginTop: 5, marginLeft: 5, marginBottom: 5 }}
                        source={{uri: props.item.thumbnail}}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.itemView}>
                        <Text style={styles.item} numberOfLines={2} ellipsizeMode="tail">
                            {props.item.title}
                        </Text>
                        <Timestamp style={styles.published} dateTime={props.item.pubDate}/>
                    </View>
                </View>
                <View style={styles.div}/>
            </View>
        </TouchableHighlight>
    );
};

export default NewsListItem;

const styles = StyleSheet.create({
    item: {
        marginVertical: 12,
        marginBottom: 5,
        fontSize: 14,
        fontWeight: 'bold',
        paddingHorizontal: 14,
    },
    div: {
        height: 0.5,
        backgroundColor: '#C0C0C0',
        marginHorizontal: 10,
    },
    published: {
        color: '#6C6C6C',
        paddingHorizontal: 14,
        marginBottom: 12,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginRight: 10,
    },
    itemView: {
        width: '92%',
    },
    chevron: {
        color: '#C0C0C0',
        fontSize: 24,
        alignSelf: 'center',
        marginLeft: 5,
    }
});
