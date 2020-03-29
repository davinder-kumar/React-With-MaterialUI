import axios from 'axios'
const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 5000,
});
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance