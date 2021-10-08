import axios from "axios";

const Api = axios.create({
    baseUrl: process.env.VUE_APP_ROOT_API
});

export default Api;