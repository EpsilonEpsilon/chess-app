"use client"

import {ReactNode, useEffect} from "react";
import jwtService, {EventEmitterEvents} from "@/model/auth/jwtService";
import {useRouter} from "next/navigation";
import {Routes} from "@/router";
import {useUserStore} from "@/model/store/useUserStore";

interface IProps{
    children:ReactNode
}
const AuthProvider = (props:IProps)=>{
    const router = useRouter();
    const userStore = useUserStore();
    useEffect(()=>{
        window.onpopstate = (data)=>{
            router.refresh();
        }
        jwtService.on(EventEmitterEvents.login, ()=>{
            router.push(Routes.home);
            userStore.toggleAuthState();
        })
        jwtService.on(EventEmitterEvents.logout, ()=>{
            router.push(Routes.default);
            userStore.toggleAuthState();
        })
    },[])

    return props.children
}

export default AuthProvider;
