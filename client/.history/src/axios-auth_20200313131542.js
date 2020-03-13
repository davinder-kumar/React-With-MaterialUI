import axios from 'axios'

// axios.defaults.baseURL ="http://localhost:8180/"
const instance = axios.create({
    baseURL: 'http://localhost:8180/',
    timeout: 1000,
});
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
export default instance