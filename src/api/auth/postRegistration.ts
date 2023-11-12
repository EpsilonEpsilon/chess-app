import axios from "axios";

interface IBody{
    username:string,
    email:string,
    password:string,
    passwordConfirmation:string,
}

interface IResponse{
    status:"success" | "error",
    data:{
        token:string,
    }
}

const postRegistration = async(body:IBody)=>{
    const response = await axios.post<IResponse>("/auth/registration", body);
    if(response.status !== 200) throw new Error("Unexpected server response");
    return response;
}


export default postRegistration;
