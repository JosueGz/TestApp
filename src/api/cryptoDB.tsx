import axios from 'axios';

const cryptoDB = axios.create({

	baseURL: 'https://api.coinlore.net/api',
	params : {
		
	}
});

export default cryptoDB;