const { default: axios } = require("axios");

const Axios = axios.create({
  baseURL: "https://backendjqueen.4muda.co/api",
  withCredentials: true,
});

export default Axios;
