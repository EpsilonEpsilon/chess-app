import styled from "styled-components";
import {lighten} from "@/helpers/lighten";
import Link from "next/link";
import {Router} from "@/router";


export enum ButtonType{
    Dark = "Dark",
    Light = "Light",
}

type ButtonShadowStyleType = ('buttonShadowLight' | 'buttonShadowDark')
type ButtonStyleType = ('buttonLight' | 'buttonDark')
interface ButtonProps{
    $3D?:boolean,
    $width?:string,
    $height?:string
    $type:ButtonType
    href?:string
}
export const Button = styled(Link).attrs((props)=>({
    href: props.href || Router.default
}))<ButtonProps>`
  background-color:${props => props.theme.palette.primary.color[('button' + props.$type) as ButtonStyleType]};
  width: ${props => props.$width};
  height: ${props => props.$height};
  border:none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color .2s linear, box-shadow .2s linear;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    background-color: ${props => lighten(props.theme.palette.primary.color[('button' + props.$type) as ButtonStyleType], 0.25)};
    ${(props)=>{
      if(props.$3D){
        return `box-shadow: 0 10px 0px -1px ${lighten(props.theme.palette.primary.color[('buttonShadow' + props.$type) as ButtonShadowStyleType], 0.15)}`;
      }
    }}
  }
  
  
  ${(props)=>{
      if(props.$3D){
          return `box-shadow: 0 10px 0px -1px ${props.theme.palette.primary.color[('buttonShadow' + props.$type) as ButtonShadowStyleType]}`;
      }
  }}
`