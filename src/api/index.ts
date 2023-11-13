import auth from "@/api/auth";
import RequestManager from "@/model/requests/RequestManager";
import user from "@/api/user";
export const BASE_URL = "https://chess-app-server.vercel.app/api"
RequestManager.baseUrl = BASE_URL;

const API = {
    auth,
    user,
}

export default API;
