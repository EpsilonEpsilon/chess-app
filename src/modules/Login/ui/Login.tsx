"use client"
import styled from "styled-components";
import backgroundImage from "@public/assets/img/login-background.png"
import {Logo} from "@/shared/components/Logo";
import {Routes} from "@/router";
import {Input} from "@/shared/components/Input";
import {useTranslations} from "use-intl";
import {BiUser} from "react-icons/bi";
import {RiLockPasswordFill} from "react-icons/ri";
import {Button, ButtonType} from "@/shared/components/ButtonLink";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import jwtService from "@/model/auth/jwtService";
import {useState} from "react";
import {Error} from "@/shared/components/Error";
interface IInputs{
    email:string,
    password:string,
}

const scheme = yup.object({
    email:yup.string().email("InputsErrors.notValid").required("InputsErrors.required"),
    password:yup.string().required("InputsErrors.required"),
})
const Login = ()=>{
    const t = useTranslations();
    const {register, handleSubmit, formState:{errors}} = useForm({resolver:yupResolver(scheme)});
    const [error, setError] = useState<string | undefined>()
    const onSubmit = (data:IInputs)=>{
        jwtService.login(data).catch(e =>{
            const error = e?.response?.data?.errors[0]?.error
            if(error) setError(error);
        })
    }

    return(
        <Layout>
            <StyledLogo href = {Routes.default}/>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <StyledInput type = "email" {...register("email")} error = {errors.email?.message && t(errors.email?.message, {field:"Email"})} startIcon = {<UserIcon/>} placeholder = {t("Input.email")}/>
                <StyledInput type = "password" {...register("password")} error = {errors.password?.message && t(errors.password?.message, {field:"Password"})} startIcon = {<PasswordIcon/>} placeholder = {t("Input.password")}/>
                <StyledError>{error && t(error)}</StyledError>
                <StyledButton type = {"submit"} $type={ButtonType.Light} $3D>{t("Global.LogIn")}</StyledButton>
            </StyledForm>
        </Layout>
    )
}


export default Login;


const Layout = styled.div`
  width: 100%;
  height:100vh;
  align-items: center;
  flex-direction: column;
  display:flex;
  background: url(${backgroundImage.src}) repeat-x bottom;;
  background-size: contain;
`

const StyledLogo = styled(Logo)`
    margin-top: 30px;
`

const StyledForm = styled.form`
    display: flex;
  flex-direction: column;
  padding: 25px;
  align-items: center;
  width: 80%;
  max-width:400px;
  background-color:#262421;
  margin-top: 50px;
  border-radius: 5px;
`
const StyledInput = styled(Input)`
    height: 35px;
`
const UserIcon = styled(BiUser)`
    font-size: 20px;
  color:${props => props.theme.palette.primary.color.inputColor}
`
const PasswordIcon = styled(RiLockPasswordFill)`
  font-size: 20px;
  color:${props => props.theme.palette.primary.color.inputColor}
`

const StyledButton = styled(Button)`
    width: 100%;
  height:50px;  
  margin: 10px 0;
  font-weight: bold;
  font-size: 25px;
`
const StyledError = styled(Error)`
    margin: 0;
`
