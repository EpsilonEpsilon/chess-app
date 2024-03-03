"use client"
import React, {ReactNode} from "react";
import styled from "styled-components";
import {Menu} from "@/shared/components";

interface IProps{
    children:ReactNode
}

const Root:React.FC<IProps> = ({children})=>{
    return(
        <Container>
            <Menu/>
            {children}
        </Container>
    )
}


export default Root;


const Container = styled.div`
  width: 100%;
  display: flex;
`
