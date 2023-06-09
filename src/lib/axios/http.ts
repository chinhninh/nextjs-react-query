import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_DOMAIN_API,
  headers: {
    "Content-type": "application/json",
    SecretKey: process.env.SECRETKEY,
    apikey: process.env.APIKEY,
  },
});
