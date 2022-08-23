import React from "react";
import styled,{css} from "styled-components";
import Woman from '../img/222.jpg'
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  width: 60%;
  font-size: 60px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    font-size: 50px;
  }
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Right = styled.div`
  
  width: 500px;
  height: 200px;
 
  
  object-position: 50px 30px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute; 
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
`;


const Image = styled.img`
    width: 100%;
`

const Intro = () => {
  return (
    <>
    <Container>
      <Left>
        <Title>Welcome to Future Care Plus</Title>
        <Desc>
        Future Care Plus has continuous opportunities for Nurses and care professionals around the UK.
        </Desc>
        <Info>
          <Button>Join Today</Button>
          <Contact>
            <Phone>Call Us (+44) 7443 - 003369</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right><Image src={Woman} style={ {width:"650px",marginTop:"70px" ,rightmargin:'10px'}}/></Right>
      <AnimatedShapes/>
    </Container>
    <IntoShape />
    </>
  );
};

export default Intro;
