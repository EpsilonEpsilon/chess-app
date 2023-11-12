import {ButtonLink as PrimaryButton, ButtonType} from "@/shared/components/ButtonLink";
import {Routes} from "@/router";
import styled from "styled-components";
import {useTranslations} from "use-intl";
import {Button} from "@/modules/Register/shared/Button";
import Link from "next/link";
import {Header} from "@/modules/Register/shared/Header";
import {PageHeader} from "@/modules/Register/shared/PageHeader";
import hero from "@public/assets/svg/pawn-on-board.svg";
import Image from "next/image";
import {Logo} from "@/shared/components/Logo"

interface Props{
    handleToggleSignIn:()=>void,
}
export const SingInWithCredentials = (props:Props)=>{
    const global = useTranslations();

    return (
        <>
            <Header>
                <div/>
                <Logo href = {Routes.default}/>
                <LogIn href={Routes.default}>{global("Global.LogIn")}</LogIn>
            </Header>
            <PageHeader>{global("Register.credentials.header")}</PageHeader>
            <HeroImage priority width = {460} height = {230} src = {hero.src} alt = "pawn on board"/>
            <SignInButton href = {"#"} onClick = {props.handleToggleSignIn} $type = {ButtonType.Light} $3D>{global("Global.SignIn")}</SignInButton>
            <DividerContainer>
                <Divider/>
                <DividerText>OR</DividerText>
                <Divider/>
            </DividerContainer>
            {/*<SocialButtonsContainer>*/}
            {/*    <SocialButton  href = {Routes.register}>*/}
            {/*        <Icon $url={google.src}/>*/}
            {/*        {global("Register.Social", {social:"Google"})}*/}
            {/*    </SocialButton>*/}
            {/*    <SocialButton>*/}
            {/*        <Icon $url={apple.src}/>*/}
            {/*        {global("Register.Social", {social:"Apple"})}*/}
            {/*    </SocialButton>*/}
            {/*    <SocialButton onClick = {()=>{logInWithProvider('facebook', {redirectTo:Router.register})}}>*/}
            {/*        <Icon $url={facebook.src}/>*/}
            {/*        {global("Register.Social", {social:"Facebook"})}*/}
            {/*    </SocialButton>*/}
            {/*</SocialButtonsContainer>*/}

            <StyledButton $type = {ButtonType.Dark} $3D href = {Routes.default}>{global("Register.PlayAsGuest")}</StyledButton>
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
  margin: 25px 0;
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
  width: auto;

`
const StyledButton = styled(PrimaryButton)`
  height:50px;
`
