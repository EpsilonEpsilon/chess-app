import styled from "styled-components";
import Link from "next/link";
import sprite from "../../public/assets/icons/sprites.png"
import {darken} from "@/helpers/darken";
import React from "react";
export const Sidebar = ()=>{
    return (

        <Divider>
            <Container>
                <SidebarContainer><SidebarItem positionX = "-22px" positionY = "13px"  href = '/'/></SidebarContainer>
                <SidebarContainer>
                    <SidebarItem positionX = "-22px" positionY = "-67px"  href = '/'/>
                    <SidebarContainerText>Play</SidebarContainerText>
                </SidebarContainer>
            </Container>
        </Divider>
    )
}

interface ISidebarItem{
    positionX:string,
    positionY:string,
}

const Container = styled.div`
  height:100%;
  background: ${props => props.theme.palette.primary.color.secondary};
  width:145px;
  position: fixed;
`

const Divider = styled.div`
    margin-right: 145px;
`

const SidebarItem = styled(Link)<ISidebarItem>`
  width: 50px;
  display: block;
  height: 50px;
  
  
  &:before {
    background: ${props => `url(${sprite.src}) ${props.positionX} ${props.positionY}`};
    background-size: 9.4rem auto;
    content: '';
    width: 120px;
    height: 45px;
    display: block;
    margin-left: 10px;
  }

  
  
`

const SidebarContainer = styled.div`
  display:flex;
  cursor: pointer;
  align-items:center;
  padding: 0 5px;
  transition: background-color .2s linear;
  &:hover {
    background-color: ${props => darken(props.theme.palette.primary.color.secondary, 0.15)}
  }
`

const SidebarContainerText = styled.p`
`
