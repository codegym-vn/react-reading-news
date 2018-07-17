import React, {Component} from 'react';
import NewsListItem from '../components/NewsListItem';
import {StyleSheet, View, FlatList} from 'react-native';
import NewsDetail from '../components/NewsDetail';

class NewsDetailScreen extends Component {
    static navigationOptions = {
        title: 'Nội dung chi tiết',
        headerBackTitle: 'Back',
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <NewsDetail detail={this.props.navigation.state.params} navigate={this.props.navigation.navigate} />
            </View>
        )
    }
}

export default NewsDetailScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
    }
});
