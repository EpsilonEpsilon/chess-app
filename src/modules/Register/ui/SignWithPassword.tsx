import {Routes} from "@/router";
import {Header} from "@/modules/Register/shared/Header";
import {Logo} from "@/modules/Register/shared/Logo"
import {PageHeader} from "@/modules/Register/shared/PageHeader";
import {useTranslations} from "use-intl";
import styled from "styled-components";
import {Input} from "@/shared/components/Input";
export const SignWithPassword = ()=>{
    const global = useTranslations();
    return (
        <>
            <Header>
                <div/>
                <Logo href = {Routes.default}/>
                <div/>
            </Header>
            <PageHeader>{global("Register.password.header")}</PageHeader>
            <PageSubheader>{global("Register.password.subheader")}</PageSubheader>
            <InputContainer>
                <Input type = "email" placeholder={global("Register.Input.email")}/>
                <Input type = "email" placeholder={global("Register.Input.password")}/>
            </InputContainer>
        </>
    )
}


const PageSubheader = styled.h4`
    color:hsla(0,0%,100%,.65);
    font-size: 18px;
    margin-top: 5px;
    align-self: center;
`

const InputContainer = styled.div`
    
`
