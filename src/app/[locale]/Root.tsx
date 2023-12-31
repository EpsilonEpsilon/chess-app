'use client'
import React from "react";
import {Sidebar} from "@/shared/components/Sidebar";
import {Header} from "@/shared/components/Header";
import styled, {ThemeProvider} from "styled-components";
import {usePathname} from "next/navigation";
import StyledComponentsRegistry from "@/shared/lib/styledComponents/registry";
import theme from "../../shared/theme";


export const Root = ({children}:{children:React.ReactNode})=>{
    const pathname = usePathname()
    const getRootComponents = ()=>{
        let pattern = /^.*\/(register|login).*$/;
        if(pattern.test(pathname)) return null;

        return(
            <>
                <Header/>
                <Sidebar/>
            </>
        )
    }

    return (

            <StyledComponentsRegistry>
                <ThemeProvider theme={theme}>
                    <Layout>
                        {getRootComponents()}
                        {children}
                    </Layout>
                </ThemeProvider>
            </StyledComponentsRegistry>
    )
}


const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  @media(max-width: 1050px){
    flex-direction: column;
  }
`

const Container = styled.div`
  display: flex;  

`
