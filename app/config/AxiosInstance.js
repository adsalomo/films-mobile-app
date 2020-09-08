import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://192.168.137.1:8082/api/",
});
