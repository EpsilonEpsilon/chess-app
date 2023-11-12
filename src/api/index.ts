import axios from "axios";
import auth from "@/api/auth";
export const BASE_URL = "https://chess-app-server.vercel.app/api"
axios.defaults.baseURL = BASE_URL;

const API = {
    auth
}

export default API;
