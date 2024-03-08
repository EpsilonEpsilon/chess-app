import styled from "styled-components";
import {Hero} from "@/components/Home";

const Home = ()=>{
    return (
        <Container>
            <Hero/>
        </Container>
    )
}


export default Home;


const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
