import {Routes} from "@/router";

export const getAppUrl = (path:Routes):string=>{
    return (window.location.origin + path) as string;
}