import axios from "axios";
import { AuthHelper } from "src/utils/AuthHelper";

const DEV_API_URL = "http://127.0.0.1:8000";

const API_URL = DEV_API_URL || process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: { Authorization: `Bearer ${AuthHelper.getAccesssToken()}` },
});

export { axiosInstance };
