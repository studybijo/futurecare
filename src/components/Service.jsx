import React, { useState } from "react";
import styled,{css} from "styled-components";
import How from "../img/how.png";
import MiniCard from "./MiniCard";
import Play from "../img/play.png";

const Container = styled.div`
  display: flex;
  height: 100%;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 30%;
  position: relative;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Image = styled.img`
  display: ${(props) => props.open && "none"};
  height: 100%;
  margin-left: 100px;
`;

const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 70%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1``;

const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  background-color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
  right: 5px;
  top: 30%;
`;
const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute; 
  top: 0;
  left: 0;
  z-index: -1;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
  background-color: #f88497;
`;

const Service = () => {
  const [open, setOpen] = useState(false);
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (<>
    <Container>
      <Left>
       

      </Left>
      <Right>
        <Wrapper>
          <Title>Service</Title>
          <Desc>
Service Description
          </Desc>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <Icon src={Play} />
            Apply Jobs
          </Button>
        </Wrapper>
      </Right>
      {smallScreen && open && (
        <Modal>

          <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
        </Modal>
      )}
    </Container>
    <ServiceShape />
    </>
  );
};

export default Service;
