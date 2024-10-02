const { default: axios } = require("axios");

const Axios = axios.create({
  baseURL: "https://backendjqueen.4muda.co/api",
  // baseURL: "http://127.0.0.1:8000/api",
  withCredentials: true,
});

export default Axios;
