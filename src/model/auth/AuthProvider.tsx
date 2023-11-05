'use client'
import {ReactNode, useEffect} from "react";
import {useRouter} from "next/navigation";
import {useUserStore} from "@/model/store/useUserStore";
interface IAuthProvider{
    children:ReactNode,
}

enum AuthStateEvents{
    signIn = "SIGNED_IN"
}

function AuthProvider(props:IAuthProvider){
    const router = useRouter();
    const user = useUserStore();


   return props.children
}


export default AuthProvider
