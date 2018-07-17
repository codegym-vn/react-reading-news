const initialState = {
    news: [],
    newsRefreshing: false,
};

const newsReducer = (state = initialState, action) => {
    if (action.type === 'GET_ARTICLES') {
        console.log(action.payload);
        return {
            articles: action.payload,
            newsRefreshing: false,
        }
    }
    if (action.type === 'REFRESHING_ARTICLES') {
        return {
            newsRefreshing: true,
        }
    }

    return state;
};

const getNewsSelector = (state) => {
    console.log(state);
    return state.news.articles;
};

const getNewsRefreshing = (state) => {
    return state.news.newsRefreshing;
};

export default newsReducer;

export {
    getNewsSelector,
    getNewsRefreshing
}
