import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			'x-rapidapi-host': 'bayut.p.rapidapi.com',
			'x-rapidapi-key': '10d0e969bemsh5e8ce001045b481p1de92djsnb3838bf7ad5b',
		},
	});

	return data;
};
