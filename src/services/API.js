import axios from "axios";

const getToken = () => {
  return JSON.parse(localStorage.getItem("token"));
};

export const API = axios.create({
  baseURL: "base-URL",
});

API.interceptors.request.use((config) => {
  const token = getToken();
  config.headers["Authorization"] = `Bearer ${token?.access_token}`;
  return config;
});
