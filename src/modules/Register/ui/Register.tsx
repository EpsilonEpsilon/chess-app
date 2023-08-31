'use client'
import styled from "styled-components";
import logo from "@public/assets/svg/logo.svg"
import Link from "next/link";
import {Router} from "@/router";
import {useTranslations} from "use-intl";
import hero from "@public/assets/svg/pawn-on-board.svg"
import Image from "next/image";
export default function Register(){
    const global = useTranslations();
    
    return (
        <Layout>
            <Container>
                <Header>
                    <div/>
                    <Logo href = {Router.default}/>
                    <LogIn href={Router.default}>{global("Global.LogIn")}</LogIn>
                </Header>
                <PageHeader>{global("Register.header")}</PageHeader>
                <HeroImage width = {460} height = {230} src = {hero.src} alt = "pawn on board"/>
            </Container>
        </Layout>
    )
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height:100%;
  margin-top: 15px;
  padding: 10px;
`
const Container = styled.div`
  max-width: 1080px;
  width: 100%;
  min-width: 320px;
  display: flex;
  align-items: center;
  
  flex-direction: column;
`

const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 50px;
`

const Logo = styled(Link)`
  display: block;
  width: 165px;
  height: 45px;
  background: url(${logo.src}) no-repeat;
`

const LogIn = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  line-height: 50px;
`

const PageHeader = styled.h1`
  width: 100%;
  max-width: 460px;
  height: auto;
  text-align: center;
  line-height: clamp(40px, 5vw,50px);
  font-size: clamp(16px, 5vw, 40px);
  font-weight: bold;
`

const HeroImage = styled(Image)`
  max-width: 100%;
  height: 32vh;
`