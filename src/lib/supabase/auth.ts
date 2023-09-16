import supabase from "@/lib/supabase/init";
import type {Provider} from "@supabase/gotrue-js";
import {getAppUrl} from "@/helpers/getAppUrl";
import {Routes} from "@/router";


interface IOptions{
    redirectTo?:Routes
}
export const logInWithProvider = (provider:Provider, options?:IOptions)=>{
    supabase.auth.signInWithOAuth({provider,
        options:{redirectTo:getAppUrl(options?.redirectTo || Routes.default)}}).catch(console.error);
}