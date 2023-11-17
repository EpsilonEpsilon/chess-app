import RequestManager from "@/model/requests/RequestManager";


interface IResponse{
    username:string,
    email:string,
}
const getProfile = async ()=>{
    const response = await RequestManager.get<IResponse>({url:"/user/profile"});
    if(response.status !== 200) throw new Error("Unexpected server component");
    return response;
}

export default getProfile;
