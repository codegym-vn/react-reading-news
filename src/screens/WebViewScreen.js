import React, {Component} from 'react';
import {StyleSheet, View, WebView} from 'react-native';

class WebViewScreen extends Component {
    static navigationOptions = {
        title: 'Đọc thêm',
        headerBackTitle: 'Back',
    };

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <WebView
                    source={{uri: this.props.navigation.state.params}}
                />
            </View>
        )
    }
}

export default WebViewScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1
    }
});
