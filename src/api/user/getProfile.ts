import RequestManager from "@/model/requests/RequestManager";

const getProfile = async ()=>{
    const response = await RequestManager.get({url:"/user/profile"});
    if(response.status !== 200) throw new Error("Unexpected server component");
    return response;
}

export default getProfile;
