import {ResponseWrapper} from "@/api/auth/type";
import HeaderManager from "@/model/requests/HeaderManager";

interface Request{
    url:string,
    options?:{
        params?:any,
        body?:any,
        headers?:any,
    }
}

interface Response<T>{
    status:number,
    data:T
}
class RequestManager extends HeaderManager{
    public  baseUrl?:string

    public async get<T>(data:Request):Promise<Response<ResponseWrapper<T>>>{
        const request = await fetch(this.baseUrl + data.url,{
            method:"GET",
            body:JSON.stringify(data.options?.body),
            headers:{
                ...this.headers,
            }
        })
        const result = await request.json()
        return {
            status:request.status,
            data:result
        }
    }
    public async post<T>(data:Request):Promise<Response<ResponseWrapper<T>>>{
        const request = await fetch(this.baseUrl + data.url,{
            method:"POST",
            body:JSON.stringify(data.options?.body),
            headers:{
                ...this.headers,
            }
        })
        const result = await request.json()
        return {
            status:request.status,
            data:result
        }
    }
}



const instance  = new RequestManager();
export default instance;
