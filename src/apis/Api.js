import axios from "axios";

const Api = axios.create({
    baseUrl: 'http://localhost:9090/api'
});

export default Api;