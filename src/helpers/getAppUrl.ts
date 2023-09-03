import {Router} from "@/router";

export const getAppUrl = (path:Router):string=>{
    return (window.location.origin + path) as string;
}