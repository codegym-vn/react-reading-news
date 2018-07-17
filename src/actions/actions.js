import getNews from './api';

// Action types
const actionTypes = {
	SET_ARTICLES: 'GET_ARTICLES',
	SET_REFRESHING_TRUE: 'REFRESHING_ARTICLES',
};

const actionCreators = {
	setNews: (payload) => {
		return {
			type: actionTypes.SET_ARTICLES,
			payload,
		}
	},
	setRefreshing: () => {
		return {
			type: actionTypes.SET_REFRESHING_TRUE,
		}
	}
};

const fetchNews = () => {
	return dispatch => {
		dispatch(actionCreators.setRefreshing());
		getNews().then(response => {
			console.log(response);
				dispatch(actionCreators.setNews(response.data.items));
		});
	}
};

export default actionCreators;

export { fetchNews };

