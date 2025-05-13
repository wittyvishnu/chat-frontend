import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const axiosInstance = axios.create({
  baseURL: `${process.env.BACKEND_URL || "http://localhost:5001"}/api`,
  withCredentials: true,
});
