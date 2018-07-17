import axios from 'axios';

export default getNews = () => {
	return axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Ftin-moi-nhat.rss');
}

