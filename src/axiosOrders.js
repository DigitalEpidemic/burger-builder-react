import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-react-e277c.firebaseio.com/'
});

export default instance;