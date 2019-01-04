import axios from 'axios';

const KEY = '9e60a159-e055-41c2-a333-216a402f68cd';

export default axios.create({
	baseURL: 'http://version1.api.memegenerator.net/'
});
