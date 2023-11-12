import axios from "axios";

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
    const response = await axios.post<IResponse>("/auth/login", body);
    if(response.status !== 200) throw new Error("Unexpected server response");
    return response;
}


export default postLogin;
