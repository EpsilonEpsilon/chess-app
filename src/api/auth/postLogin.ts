import RequestManager from "@/model/requests/RequestManager";

interface IBody{
    email:string,
    password:string,
}

interface IResponse{
    status:"success" | "error",
    data:{
        token:string,
    }
}
const postLogin = async (body:IBody)=>{
    const response = await RequestManager.post<IResponse>({url:"/auth/login", options:{body}});
    if(response.status !== 200) throw new Error("Unexpected server response");
    return response;
}


export default postLogin;
