import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:8180/',
    timeout: 5000,
});
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default instance