import axios from 'axios'

// axios.defaults.baseURL ="http://localhost:8180/"
const instance = axios.create({
    baseURL: 'http://localhost:8180/',
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    timeout: 1000,
  });

export default instance