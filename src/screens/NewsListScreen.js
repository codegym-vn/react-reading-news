import React, {Component} from 'react';
import NewsListItem from '../components/NewsListItem';
import {StyleSheet, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {fetchNews} from '../actions/actions';
import {getNewsSelector, getNewsRefreshing} from '../store/news';
import LoadingIndicator from '../components/LoadingIndicator';

class NewsListScreen extends Component {

    static navigationOptions = {
        title: 'Vnexpress - Tin tức số 1 Việt Nam',
        headerBackTitle: 'Back',
    };

    constructor(props) {
        super(props);

        this.renderNewsItem = this.renderNewsItem.bind(this);
        this.showNewsDetailScreen = this.showNewsDetailScreen.bind(this);
    }

    componentDidMount() {
        this.props.fetchNews();
    }

    showNewsDetailScreen(item) {
        const {navigate} = this.props.navigation;

        navigate('Detail', item);
    }

    renderNewsItem({item}) {
        return (
            <NewsListItem
                item={item}
                onPress={this.showNewsDetailScreen}
            />
        );
    }

    extractNewsItemKey(item) {
        return item.url;
    }

    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                {this.props.articles ?
                    <FlatList
                        data={this.props.articles}
                        renderItem={this.renderNewsItem}
                        keyExtractor={this.extractNewsItemKey}
                        refreshing={this.props.isRefreshing}
                        onRefresh={this.props.fetchNews}
                    />
                    :
                    <LoadingIndicator/>
                }
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: getNewsSelector(state),
        isRefreshing: getNewsRefreshing(state),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchNews: () => dispatch(fetchNews()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsListScreen);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'center',
    }
});
