import Axios from 'axios';

const API_KEY = '6d4a55d9';
const axios = Axios.create({
  baseURL: 'https://www.omdbapi.com',
});
axios.defaults.params = {
  apikey: API_KEY,
};
export default axios;
