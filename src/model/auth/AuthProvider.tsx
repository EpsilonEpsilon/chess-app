'use client'
import {ReactNode, useEffect} from "react";
import {useRouter} from "next/navigation";
import supabase from "@/lib/supabase/init";
import {Router} from "@/router";
interface IAuthProvider{
    children:ReactNode,
}

enum AuthStateEvents{
    signIn = "SIGNED_IN"
}

function AuthProvider(props:IAuthProvider){
    const router = useRouter();


    useEffect(()=>{
        supabase.auth.onAuthStateChange((event)=>{
            if(event === AuthStateEvents.signIn) router.push('/profile')
        })
    },[])

   return props.children
}


export default AuthProvider