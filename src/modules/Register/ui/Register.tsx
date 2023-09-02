'use client'
import styled from "styled-components";
import logo from "@public/assets/svg/logo.svg"
import Link from "next/link";
import {Router} from "@/router";
import {useTranslations} from "use-intl";
import hero from "@public/assets/svg/pawn-on-board.svg"
import Image from "next/image";
import {ButtonType, Button as PrimaryButton} from "@/shared/Button";
import {Button} from "./../ui/Button";
import google from "@public/assets/svg/google.svg";
import apple from "@public/assets/svg/apple.svg";
import facebook from "@public/assets/svg/facebook.svg";
import supabase from "@/lib/supabase/init";
export default function Register(){
    const global = useTranslations();

    return (
        <Layout>
            <Container>
                <Content>
                    <Header>
                        <div/>
                        <Logo href = {Router.default}/>
                        <LogIn href={Router.default}>{global("Global.LogIn")}</LogIn>
                    </Header>
                    <PageHeader>{global("Register.header")}</PageHeader>
                    <HeroImage width = {460} height = {230} src = {hero.src} alt = "pawn on board"/>
                    <SignInButton $type = {ButtonType.Light} $3D>{global("Global.SignIn")}</SignInButton>
                    <DividerContainer>
                        <Divider/>
                        <DividerText>OR</DividerText>
                        <Divider/>
                    </DividerContainer>
                    <SocialButtonsContainer>
                        <SocialButton href = {Router.register} onClick = {()=>{
                            supabase.auth.signInWithOAuth({provider:"google"}).then(()=>{

                            })
                        }}>
                            <Icon $url={google.src}/>
                            {global("Register.Social", {social:"Google"})}
                        </SocialButton>
                        <SocialButton>
                            <Icon $url={apple.src}/>
                            {global("Register.Social", {social:"Apple"})}
                        </SocialButton>
                        <SocialButton>
                            <Icon $url={facebook.src}/>
                            {global("Register.Social", {social:"Facebook"})}
                        </SocialButton>
                    </SocialButtonsContainer>

                    <PlayAsGuestButton href = {Router.default}>{global("Register.PlayAsGuest")}</PlayAsGuestButton>
                </Content>
            </Container>
        </Layout>
    )
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% - 20px);;
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
const Content = styled.div`
  max-width: 460px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const SignInButton = styled(PrimaryButton)`
  width: 100%;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
`

const DividerContainer = styled.div`
    display: flex;
    width: 100%;
  justify-content: center;
  margin-top: 50px;
`
const Divider = styled.span`
    width: 160px;
    height: 1px;
    background-color: hsla(0,0%,100%,.1);;
    line-height: 60px;
    margin: 10px 20px;
    
`
const DividerText = styled.p`
`

const SocialButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  margin-top: 15px;
`

const SocialButton = styled(Button).attrs(()=>({

}))`
    width: 100%;
  height: 50px;
  font-size: 15px;
  font-weight: bold;
  margin: 8px 0;
`

const Icon = styled.div<{ $url: string }>`
  width: 24px;
  height:24px;
  

  
  &:before{
    position: absolute;
    content: "";
    width: 25px;
    height:25px;
   
    display: block;
    background: ${props => `url(${props.$url})  no-repeat`};
    background-size: 100%;
    left: 90px;
  }
`

const PlayAsGuestButton = styled(Link)`
  text-align: center;
  margin: 20px 0;

  &:hover {
    color: rgba(243, 236, 236, 0.88);
  }
`