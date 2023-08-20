'use client';

import styled from "styled-components";
import Image from "next/image";
import board from './../../../../public/assets/img/chessboard-home.png'
import {useTranslations} from "use-intl";
import {Button, ButtonType} from "@/shared/Button";
import playOnline from "@public/assets/svg/playwhite.svg"
import playComputer from "@public/assets/svg/computer.svg";
import {useMediaQuery} from "@/hook/useMediaQuery";
import {Typography} from "@/shared/Typography";

const Home = ()=>{
    const t = useTranslations("Home");
    const isBoard = useMediaQuery('(min-width:890px)');


    return(
        <Container>
            <Main>
                <ImgContainer>
                    <Board priority src = {board} alt = {'chess-board'}/>
                </ImgContainer>

                <Content>
                    <Header>
                        <Typography>{t("header1")}</Typography>
                        <Typography>{t("header2")}</Typography>
                        <Typography>{t("header3")}</Typography>
                    </Header>

                    <SubHeaderContainer>
                        <SubHeaderItem><Number>Nan</Number>{t("subheader1")}</SubHeaderItem>
                        <SubHeaderItem><Number>Nan</Number>{t("subheader2")}</SubHeaderItem>
                    </SubHeaderContainer>
                    <ButtonContainer>
                        <HeaderButton $type = {ButtonType.Light} $3D >
                            <SvgIcon width={70} height={70} src={playOnline} alt={'play online icon'}/>
                            <ButtonText>
                                <ButtonHeader>{t("PlayOnline")}</ButtonHeader>
                                <ButtonSubheader>{t("PlayOnlineSubheader")}</ButtonSubheader>
                            </ButtonText>
                        </HeaderButton>
                        <HeaderButton $type = {ButtonType.Dark}  $3D >
                            <SvgIcon width={70} height={70} src={playComputer} alt={'play online icon'}/>
                            <ButtonText>
                                <ButtonHeader>{t("PlayComputer")}</ButtonHeader>
                                <ButtonSubheader>{t("PlayComputerSubheader")}</ButtonSubheader>
                            </ButtonText>
                        </HeaderButton>
                    </ButtonContainer>
                </Content>
            </Main>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

const Main = styled.main`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 15px;
  
`

const Board = styled(Image).attrs(props =>({
}))`
  border-radius: 5px;
  height: auto;
  max-width: 500px;
  width: 100%;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.h1`
  color:#fff;
  width: 100%;
  max-width: 430px;
  font-weight: 700;
  line-height: 60px;
  text-align:center;
  font-size: clamp(40px,4vw,3.8rem);
`
const SubHeaderContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
  
  @media(max-width: 330px){
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }
`
const SubHeaderItem = styled.p`
    color:#797876;
    display: flex;
  text-align: center;
  @media(max-width: 330px){
    margin: 10px 0;
    text-align: left;
  }
`
const ImgContainer = styled.div`
  max-width: 100%;
  width: 500px;
  height:500px;
  min-width: 120px;
  margin-right:40px;
  
  max-height: 500px;
  
  @media(max-width: 890px){
    display: none;
  }
`

const Number = styled.b`
    color:#fff;
    margin: 0 10px;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`

const HeaderButton = styled(Button)`
  margin: 15px 0;
  width: 100%;
  max-width: 380px;
  height:96px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const ButtonText = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    height:100%;
    text-align: left;
`

const ButtonHeader = styled.p`
    font-weight: bold;
    font-size: clamp(18px, 3vw, 28px);
`

const ButtonSubheader = styled.p`
  font-size: clamp(13px, 3vw, 14px);
`

const SvgIcon = styled(Image)`
  filter: drop-shadow(0 5px 6px rgba(0,0,0,.4));
`



export default Home;