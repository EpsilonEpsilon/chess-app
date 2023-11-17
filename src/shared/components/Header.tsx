import styled from "styled-components";
import {AiOutlineMenu} from "react-icons/ai";
import Link from "next/link";
import sprite from "@public/assets/icons/sprites.png"
import {ButtonLink, ButtonType} from "@/shared/components/ButtonLink";
import {useTranslations} from "use-intl";
import {Routes} from "@/router";

export const Header = ()=>{
    const t = useTranslations("Global");

    return (
        <Container>
            <Left>
                <Menu/>
                <Logo href = '/'/>
            </Left>
            <Right>
                <HeaderButton href = {Routes.register} $type={ButtonType.Light}>{t("SignIn")}</HeaderButton>
                <HeaderButton $matching $type={ButtonType.Dark}>{t("LogIn")}</HeaderButton>
            </Right>
        </Container>
    )
}

const Container = styled.div`
    height: 40px;
    width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  @media(min-width: 1050px){
    display: none;
  }
`

const Left = styled.div`
    display: flex;
`

const Right = styled.div`
    display: flex;
`

const Menu = styled(AiOutlineMenu)`
  color:#989795;
  font-size: 36px;
  margin: 10px;
  cursor: pointer;
`
const Logo = styled(Link)`
  display: block;
  
  &:before {
    background: url(${sprite.src}) -22px 10px;
    background-size: 9.4rem auto;
    content: '';
    width: 120px;
    height: 45px;
    display: block;
    margin-left: 10px;
    
  }
`
const HeaderButton = styled(ButtonLink)<{$matching?:boolean}>`
    width: 75px;
  height: 35px;
  border-radius: 5px;
  margin: 0 15px;
  ${props => {
      if(props.$matching){
          return `@media(max-width:400px){display:none}`
      }
  }}
`
