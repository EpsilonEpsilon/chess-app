import EventEmitter from "./EventEmitter";
import axios from "axios";
import Cookies from "js-cookie";
import {jwtTokenExpiration} from "@/shared/helpers";
import API from "@/api";

export enum EventEmitterEvents{
    logout = "onLogout",
    login = "onLogin",
}
class JwtService extends EventEmitter{
    constructor() {
        super();
        this.setInterceptors();
    }
    private setInterceptors(){
        axios.interceptors.response.use((response:any)=>{
            return response;
        }, (error)=>{
            return new Promise((res, rej)=>{
                if (error.response.status === 401  && error.config && !error.config.__isRetryRequest) {
                    this.emit(EventEmitterEvents.logout);
                    this.setSession(undefined);
                }
                throw error;
            })
        })
    }

    public async login(data:{email:string, password:string}){
        const response = await API.auth.postLogin(data);
        const token = response.data.data.token;
        this.setSession(token);
        this.emit(EventEmitterEvents.login);
    }

    public logout(){
        this.setSession(undefined);
        this.emit(EventEmitterEvents.logout);
    }

    public async registration(body:{username:string, email:string, password:string, passwordConfirmation:string}){
        const response = await API.auth.postRegistration(body);
        this.setSession(response.data.data.token);
    }
    private setSession(token:string | undefined){
        if(token){
            const expirationTime = jwtTokenExpiration(token);
            if(!expirationTime) throw new Error("Jwt token expiration time error");
            Cookies.set("token", token, {expires: new Date(expirationTime)})
        }else{
            Cookies.remove("token");
        }
    }
}
const instance = new JwtService();
export default instance;
