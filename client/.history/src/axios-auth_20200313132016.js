import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:8180/',
    timeout: 1000,
});
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
//application/x-www-form-urlencoded;charset=utf-8
export default instance