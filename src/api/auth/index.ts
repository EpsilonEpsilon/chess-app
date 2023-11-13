import postRegistration from "@/api/auth/postRegistration";
import postLogin from "@/api/auth/postLogin";
import verifyToken from "@/api/auth/verifyToken";



const auth = {
    postRegistration,
    postLogin,
    verifyToken,
}

export default auth;
