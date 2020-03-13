import axios from 'axios'

// axios.defaults.baseURL ="http://localhost:8180/"
const instance = axios.create({
    baseURL: 'http://localhost:8180/',
    timeout: 1000,
  });

export default instance