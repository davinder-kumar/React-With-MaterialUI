import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:8180/',
    timeout: 1000,
});
//application/x-www-form-urlencoded;charset=utf-8
export default instance