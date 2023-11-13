"use client"

import {ReactNode, useEffect} from "react";
import jwtService, {EventEmitterEvents} from "@/model/auth/jwtService";
import {useRouter} from "next/navigation";
import {Routes} from "@/router";
import {useUserStore} from "@/model/store/useUserStore";

interface IProps{
    children:ReactNode,
    userProfile?:{
        username:"string",
        email:string
    }
}
const AuthProvider = (props:IProps)=>{
    const router = useRouter();
    const userStore = useUserStore();

    useEffect(()=>{
        window.onpopstate = ()=>{
            router.refresh();
        }
        jwtService.on(EventEmitterEvents.login, ()=>{
            router.push(Routes.home);
            userStore.toggleAuthState();
            router.refresh();

        })
        jwtService.on(EventEmitterEvents.logout, ()=>{
            router.push(Routes.default);
        })
    },[])

    useEffect(()=>{
        if(!props.userProfile) return;

        userStore.setUserProfileInfo(props.userProfile?.email, props.userProfile?.username)
    },[props.userProfile?.email, props.userProfile?.username])

    return props.children
}

export default AuthProvider;
