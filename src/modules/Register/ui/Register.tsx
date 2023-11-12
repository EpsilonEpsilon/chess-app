'use client'
import styled from "styled-components";
import {SingInWithCredentials} from "@/modules/Register/ui/SingInWithCredentials";
import {useState} from "react";
import {SignWithPassword} from "@/modules/Register/ui/SignWithPassword";
import {IoArrowBackSharp} from "react-icons/io5";
import {useRouter} from "next/navigation";


export default function Register(){
    const [signUp, setSignUp] = useState(false);
    const router = useRouter();
    const handleToggleSignIn = ()=>{
        setSignUp(prev => !prev);
    }

    const handleOnClick = ()=>{
        if(!signUp) router.back();
        setSignUp(false);
    }
    return (
        <Layout>
            <IconContainer onClick = {handleOnClick}>
                <BackIcon/>
            </IconContainer>
            <Container>
                <Content>
                    {signUp ? <SignWithPassword handleToggleSignIn = {handleToggleSignIn}/> : <SingInWithCredentials handleToggleSignIn = {handleToggleSignIn}/>}
                </Content>
            </Container>
        </Layout>
    )
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% - 20px);;
  height:95%;
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

const Content = styled.div`
  max-width: 460px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const IconContainer = styled("div")`
    cursor: pointer;
`
const BackIcon = styled(IoArrowBackSharp)`
    font-size: 30px;
  color:hsla(0,0%,100%,.5);
`
