import supabase from "@/lib/supabase/init";
import type {Provider} from "@supabase/gotrue-js";
import {getAppUrl} from "@/helpers/getAppUrl";
import {Router} from "@/router";


interface IOptions{
    redirectTo?:Router
}
export const logInWithProvider = (provider:Provider, options?:IOptions)=>{
    supabase.auth.signInWithOAuth({provider,
        options:{redirectTo:getAppUrl(options?.redirectTo || Router.default)}}).catch(console.error);
}