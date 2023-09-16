import styled from "styled-components";
import {HTMLInputTypeAttribute} from "react";

interface IProps{
    icon?:string,
}

export const Input = styled.input.attrs((props)=>({
}))<IProps>`
  position: relative;
  height:50px;
  width: 100%;
  border: 1px solid hsla(0,0%,100%,.1);
  border-radius: 5px;
  background: hsla(0,0%,100%,.1);
  padding-left: 40px;
  
`


