'use client'
import React from "react";
import {Sidebar} from "@/shared/Sidebar";
import {Header} from "@/shared/Header";
import styled, {ThemeProvider} from "styled-components";
import {useMediaQuery} from "@/hook/useMediaQuery";
import {usePathname} from "next/navigation";
import StyledComponentsRegistry from "@/lib/styledComponents/registry";
import theme from "@/theme";

export const Root = ({children, isMobile}:{children:React.ReactNode, isMobile:boolean})=>{
    const matched = useMediaQuery('(max-width: 1050px)')
    const pathname = usePathname()

    const getSidebar = ()=>{
        let pattern = /^\/(?:\w+\/)?register$/;
        if(pattern.test(pathname)) return null;
        if(!matched || !isMobile) return <Sidebar/>

        return <Header/>
    }

    return (
        <Layout>
            <StyledComponentsRegistry>
                <ThemeProvider theme={theme}>
                    <Container>
                        {getSidebar()}
                        {children}
                    </Container>
                </ThemeProvider>
            </StyledComponentsRegistry>
        </Layout>
    )
}


const Layout = styled.div`
    display: flex;
  @media(max-width: 1050px){
    flex-direction: column;
  }
`

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`
