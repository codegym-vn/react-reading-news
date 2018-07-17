import {
    StackNavigator,
} from 'react-navigation';
import {Platform} from 'react-native';
import NewsListScreen from './screens/NewsListScreen';
import NewsDetailScreen from './screens/NewsDetailScreen';
import WebViewScreen from './screens/WebViewScreen'

const isAndroid = Platform.OS === 'android';

const extraStyles = Platform.select({
    android: {
        marginTop: 0,
    }
});

export default StackNavigator({
    List: {screen: NewsListScreen},
    Detail: {screen: NewsDetailScreen},
    WebView: {screen: WebViewScreen},
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#d35400',
            ...extraStyles,
        },
        headerTitleStyle: {
            color: '#fff',
        },
        headerTintColor: '#fff',
    }
});
