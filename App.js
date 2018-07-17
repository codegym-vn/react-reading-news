import React, { Component } from 'react';
import Navigator from './src/navigator';
import newsReducer from './src/store/news';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    news: newsReducer,
});

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        );
    }
}
