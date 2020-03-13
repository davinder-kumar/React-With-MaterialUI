import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:8180/',
    timeout: 5000,
});
export default instance