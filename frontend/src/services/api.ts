import axios from "axios";

const api = axios.create({
  baseURL: "https://api.seuecommerce.com",
});

export default api;
