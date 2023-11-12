import {Routes} from "@/router";
import {Header} from "@/modules/Register/shared/Header";
import {Logo} from "@/shared/components/Logo"
import {PageHeader} from "@/modules/Register/shared/PageHeader";
import {useTranslations} from "use-intl";
import styled from "styled-components";
import {Input} from "@/shared/components/Input";
import {MdEmail} from "react-icons/md";
import {AiFillLock} from "react-icons/ai";
import {Button, ButtonType} from "@/shared/components/ButtonLink";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useState} from "react";
import jwtService from "@/model/auth/jwtService";
import {Error} from "@/shared/components/Error";
interface Props{
    handleToggleSignIn:()=>void,
}
const scheme = yup.object({
    username:yup.string().required("InputsErrors.required"),
    email:yup.string().email("InputsErrors.notValid").required("InputsErrors.required"),
    password:yup.string().required("InputsErrors.required"),
    passwordConfirmation:yup.string().required("InputsErrors.required").oneOf([yup.ref('password')], 'InputsErrors.passwordDontMatch')
})

interface IInputs{
    username:string,
    email:string,
    password:string,
    passwordConfirmation:string,
}

export const SignWithPassword = (props:Props)=>{
    const t = useTranslations();
    const [error, setError] = useState<string | undefined>(undefined);
    const {register, handleSubmit, formState:{errors} } = useForm<IInputs>({resolver:yupResolver(scheme)});
    const onSubmit = (data:IInputs)=>{
        jwtService.registration(data).catch(e =>{
            const error = e?.response?.data?.errors[0]?.error
            if(error) setError(error);
        })
    }

    return (
        <>
            <StyledHeader>
                <Logo href = {Routes.default}/>
            </StyledHeader>
            <PageHeader>{t("Register.password.header")}</PageHeader>
            <PageSubheader>{t("Register.password.subheader")}</PageSubheader>
            <InputContainer>
                <StyledInput error = {errors.username?.message && t(errors.username?.message, {field:"Username"})} {...register("username")} startIcon={<EmailIcon/>} type = "email" placeholder={t("Input.username")}/>
                <StyledInput error = {errors.email?.message && t(errors.email?.message, {field:"Email"})} {...register("email")} startIcon={<EmailIcon/>} type = "email" placeholder={t("Input.email")}/>
                <StyledInput error = {errors.password?.message && t(errors.password?.message, {field:"Password"})} {...register("password")} startIcon={<Lock/>} type = "password" placeholder={t("Input.password")}/>
                <StyledInput error = {errors.passwordConfirmation?.message && t(errors.passwordConfirmation?.message, {field:"Password confirmation"})} {...register("passwordConfirmation")} startIcon={<Lock/>} type = "password" placeholder={t("Input.passwordConfirmation")}/>
                <Error>{t(error)}</Error>
                <StyledButton onClick={handleSubmit(onSubmit)} type="submit" $3D $type = {ButtonType.Light}><ButtonHeader>{t("Register.button")}</ButtonHeader></StyledButton>
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

const InputContainer = styled.form`
    margin-bottom: 25px;
`

const StyledInput = styled(Input)`
    margin:10px 0;
`

const EmailIcon = styled(MdEmail)`
  width: 25px;
  height: 25px;
  color:hsla(0,0%,100%,.5);
`

const Lock = styled(AiFillLock)`
  width: 25px;
  height: 25px;
  color:hsla(0,0%,100%,.5);
`

const StyledButton = styled(Button)`
    width: 100%;
    height:60px;
  margin-top: 30px;
`

const ButtonHeader = styled.p`
    font-weight: bold;
    font-size: clamp(18px, 3vw, 28px);
`

const StyledHeader = styled(Header)`
    justify-content: center;
`
