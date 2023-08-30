'use client'
import React from "react";
import {Sidebar} from "@/shared/Sidebar";
import {Header} from "@/shared/Header";
import styled from "styled-components";
import {useMediaQuery} from "@/hook/useMediaQuery";
import {usePathname} from "next/navigation";

export const Root = ({children}:{children:React.ReactNode})=>{
    const matched = useMediaQuery('(max-width: 1050px)')
    const pathname = usePathname()

    const getSidebar = ()=>{
        let pattern = /^\/(?:\w+\/)?register$/;
        if(pattern.test(pathname)) return null;
        if(!matched) return <Sidebar/>

        return <Header/>
    }

    return (
        <Container>
            {getSidebar()}
            {children}
        </Container>
    )
}


const Container = styled.div`
    display: flex;
  @media(max-width: 1050px){
    flex-direction: column;
  }
`