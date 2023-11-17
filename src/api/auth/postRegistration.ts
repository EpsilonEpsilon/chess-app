import RequestManager from "@/model/requests/RequestManager";

interface IBody{
    username:string,
    email:string,
    password:string,
    passwordConfirmation:string,
}

interface IResponse{
    token:string,
}

const postRegistration = async(body:IBody)=>{
    const response = await RequestManager.post<IResponse>({url:"/auth/registration", options:{body}});
    if(response.status !== 200) throw new Error("Unexpected server response");
    return response;
}


export default postRegistration;
