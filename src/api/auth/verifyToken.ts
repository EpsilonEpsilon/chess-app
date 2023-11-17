import RequestManager from "@/model/requests/RequestManager";
interface IBody{
    token:string,
}

interface IResponse{
    verified:boolean
}
const verifyToken = async (body:IBody)=>{
    const response = await RequestManager.post<IResponse>({url:"/auth/verify", options:{
        body
    }})
    if(response.status !== 200) throw new Error("Unexpected server response");
    return response;
}


export default verifyToken;
