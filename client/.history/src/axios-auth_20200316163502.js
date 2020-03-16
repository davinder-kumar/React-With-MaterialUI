import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:8181/',
    timeout: 5000,
});
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance