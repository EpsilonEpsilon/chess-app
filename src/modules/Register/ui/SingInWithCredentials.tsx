import {Button as PrimaryButton, ButtonType} from "@/shared/Button";
import {Routes} from "@/router";
import {logInWithProvider} from "@/lib/supabase/auth";
import styled from "styled-components";
import {useTranslations} from "use-intl";
import {Button} from "./components/Button";
import google from "@public/assets/svg/google.svg"
import Link from "next/link";
import {Header} from "@/modules/Register/ui/components/Header";
import {PageHeader} from "@/modules/Register/ui/components/PageHeader";
import hero from "@public/assets/svg/pawn-on-board.svg";
import Image from "next/image";
import {Logo} from "./components/Logo"
export const SingInWithCredentials = ()=>{
    const global = useTranslations();


    return (
        <>
            <Header>
                <div/>
                <Logo href = {Routes.default}/>
                <LogIn href={Routes.default}>{global("Global.LogIn")}</LogIn>
            </Header>
            <PageHeader>{global("Register.credentials.header")}</PageHeader>
            <HeroImage width = {460} height = {230} src = {hero.src} alt = "pawn on board"/>
            <SignInButton $type = {ButtonType.Light} $3D>{global("Global.SignIn")}</SignInButton>
            <DividerContainer>
                <Divider/>
                <DividerText>OR</DividerText>
                <Divider/>
            </DividerContainer>
            <SocialButtonsContainer>
                <SocialButton  href = {Routes.register} onClick = {()=>{logInWithProvider('google', {redirectTo:Routes.register})}}>
                    <Icon $url={google.src}/>
                    {global("Register.Social", {social:"Google"})}
                </SocialButton>
                {/*<SocialButton>*/}
                {/*    <Icon $url={apple.src}/>*/}
                {/*    {global("Register.Social", {social:"Apple"})}*/}
                {/*</SocialButton>*/}
                {/*<SocialButton onClick = {()=>{logInWithProvider('facebook', {redirectTo:Router.register})}}>*/}
                {/*    <Icon $url={facebook.src}/>*/}
                {/*    {global("Register.Social", {social:"Facebook"})}*/}
                {/*</SocialButton>*/}
            </SocialButtonsContainer>

            <PlayAsGuestButton href = {Routes.default}>{global("Register.PlayAsGuest")}</PlayAsGuestButton>
        </>
    )
}

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



const LogIn = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  line-height: 50px;
`

const HeroImage = styled(Image)`
  max-width: 100%;
  height: 32vh;
`
