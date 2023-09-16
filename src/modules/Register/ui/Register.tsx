'use client'
import styled from "styled-components";
import {useTranslations} from "use-intl";
import {SingInWithCredentials} from "@/modules/Register/ui/SingInWithCredentials";
import {SignWithPassword} from "@/modules/Register/ui/SignWithPassword";



export default function Register(){
    const global = useTranslations();

    return (
        <Layout>
            <Container>
                <Content>
                    <SignWithPassword/>
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

const Content = styled.div`
  max-width: 460px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
