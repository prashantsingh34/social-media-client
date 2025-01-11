import axios from "axios";

export const makeRequest = axios.create({
  baseURL: process.env.CLIENT_API_ENDPOINT,
  withCredentials: true,
});
