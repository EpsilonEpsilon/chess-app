import styled from "styled-components";
import {Router} from "@/router";
import {darken} from "@/helpers/darken";
import {lighten} from "@/helpers/lighten";
import Link from "next/link";

interface ButtonProps{
    $width?:string,
    $height?:string
    href?:string
}
export const Button = styled(Link).attrs((props)=>({
    href:props.href || Router.default
}))<ButtonProps>`
  width: ${props => props.$width};
  height: ${props => props.$height};
  background-color: ${props => props.theme.palette.primary.color.globalNeutral100};
  transition: background-color .2s linear;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(16, 15, 15, 0.63);
  }
  
  box-shadow: 0 5px 0px -1px rgba(0,0,0,.45);
  border-radius: 10px;
`