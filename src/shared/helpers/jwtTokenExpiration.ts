import {jwtDecode} from "jwt-decode";

function JwtTokenExpiration(token:string) {
    const {exp} = jwtDecode(token);
    if(!exp) return undefined;
    return new Date(exp * 1000);
}

export default JwtTokenExpiration;
