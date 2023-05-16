import axios from "axios";

export const api = axios.create({
    baseURL: 'https://rocketmoviesapi-2u5r.onrender.com'
});