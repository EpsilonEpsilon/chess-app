import React from "react";
import {Sidebar} from "@/shared/Sidebar";
import {Header} from "@/shared/Header";
import styled from "styled-components";
import {useMediaQuery} from "@/hook/useMediaQuery";

export const Root = ({children}:{children:React.ReactNode})=>{
    const matched = useMediaQuery('(max-width: 1050px)')
    return (
        <Container>
            {!matched && <Sidebar/>}
            {matched && <Header/>}
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