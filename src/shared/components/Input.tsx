import styled from "styled-components";
import React, {forwardRef, ReactElement} from "react";


interface IProps extends React.InputHTMLAttributes<HTMLInputElement>{
    startIcon?:ReactElement,
    endIcon?:ReactElement,
    error?:string
}



export const Input = forwardRef<HTMLInputElement, IProps>((props, ref)=>{
    const {startIcon, error, endIcon, ...rest} = props;
    return (
        <InputContainer>
            <InputWrapper>
                <StartIconContainer>
                    {startIcon}
                </StartIconContainer>
                <StyledInput $isError={!!error?.length} ref = {ref} {...rest}/>
                <EndIconContainer>
                    {endIcon}
                </EndIconContainer>
            </InputWrapper>
            <ErrorWrapper>
                {error && <Error>{error}</Error>}
            </ErrorWrapper>
        </InputContainer>
    )
})
Input.displayName = "Input";

interface StyledProps{
    $isError?:boolean;
}

const StyledInput = styled.input.attrs((props)=>({
}))<StyledProps>`
  position: relative;
  height:50px;
  width: 100%;
  border: ${props => props.$isError ? `1px solid ${props.theme.palette.primary.color.colorDanger}` : `1px solid hsla(0,0%,100%,.1)`};
  border-radius: 5px;
  background: hsla(0,0%,100%,.1);
  padding-left: 40px;
  color:rgb(190, 189, 189);
  outline: none;
  margin: 10px 0;
  &::placeholder{
    color:rgb(190, 189, 189);
  }
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 10px 0;
  width: 100%;
`
const InputWrapper = styled.div`
  display: flex;
  position: relative;
`
const ErrorWrapper = styled.div`
    position: relative;
`
const Error = styled.p`
    color:${props => props.theme.palette.primary.color.colorDanger};
  position: absolute;
  top:-5px;
`
const StartIconContainer = styled.div`
  position: absolute;
  top: 55%;
  transform: translateY(-55%);
  left:7px;
  z-index: 5;
`

const EndIconContainer = styled.div`
  position: absolute;
  top: 55%;
  transform: translateY(-55%);
  right:7px;
  z-index: 5;
`
