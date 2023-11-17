import styled from "styled-components";
import Link from "next/link";
import sprite from "@public/assets/icons/sprites.png"
import {darken} from "@/shared/helpers/darken";
import React from "react";
import {ButtonLink, ButtonType} from "@/shared/components/ButtonLink";
import {useTranslations} from "use-intl";
import {Routes} from "@/router";
import {useUserStore} from "@/model/store/useUserStore";

export const Sidebar = ()=>{
    const t = useTranslations("Global");
    const {isLoggedIn} = useUserStore();
    return (
        <Divider>
            <Container>
                <SidebarContainer><SidebarItem $positionX = "-22px" $positionY = "13px"  href = '/'/></SidebarContainer>
                <SidebarContainer>
                    <SidebarItem $positionX = "-22px" $positionY = "-67px"  href = '/'/>
                    <SidebarContainerText>Play</SidebarContainerText>
                </SidebarContainer>

                {!isLoggedIn && (
                    <ButtonContainer>
                        <SidebarButton href = {Routes.register} $type={ButtonType.Dark}>{t("SignIn")}</SidebarButton>
                        <SidebarButton href = {Routes.login} $type={ButtonType.Light}>{t("LogIn")}</SidebarButton>
                    </ButtonContainer>
                )}
            </Container>
        </Divider>
    )
}

interface ISidebarItem{
    $positionX:string,
    $positionY:string,


}

const Container = styled.div`
  height:100%;
  background: ${props => props.theme.palette.primary.color.secondary};
  width:145px;
  position: fixed;
  padding: 0 5px;
  
  @media(max-width: 1050px){
    display: none;
  }
  
`

const Divider = styled.div`
    margin-right: 155px;
  @media(max-width:1000px){
    display: none;
  }
`

const SidebarItem = styled(Link)<ISidebarItem>`
  width: 50px;
  display: block;
  height: 50px;
  
  
  &:before {
    background: ${props => `url(${sprite.src}) ${props.$positionX} ${props.$positionY}`};
    background-size: 9.4rem auto;
    content: '';
    width: 120px;
    height: 45px;
    display: block;
    margin-left: 10px;
  }
`

const SidebarContainer = styled.div`
  display:flex;
  cursor: pointer;
  align-items:center;
  transition: background-color .2s linear;
  &:hover {
    background-color: ${props => darken(props.theme.palette.primary.color.secondary, 0.15)}
  }
`

const SidebarContainerText = styled.p`
`
const ButtonContainer = styled.div`
    display: flex;
  flex-direction: column;
`
const SidebarButton = styled(ButtonLink)`
  width: calc(100% - 20px);
  height: 40px;
  margin:10px 10px;
`

