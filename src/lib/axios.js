import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const axiosInstance = axios.create({
  baseURL: "https://chat-api-jhrn.onrender.com/api",
  withCredentials: true,
});
