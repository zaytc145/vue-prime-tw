import axios from 'axios';
import apiConfig from "@/config/api.js";

export const api = axios.create(apiConfig)
