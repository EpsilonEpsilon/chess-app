import styled from "styled-components";
import Image from "next/image";

const Hero = ()=>{
    return (
        <Container>
            <StyledImage width = {496} height = {496} src = "/images/hero.png" alt = "hero" priority/>
        </Container>
    )
}

export default Hero;


const Container = styled.div`
    width: 100%;
  display: flex;
  justify-content: center;
`
const StyledImage = styled(Image)`
  border-radius: 5px;
`
const Content = styled.div``
const Header = styled.h1`
`
