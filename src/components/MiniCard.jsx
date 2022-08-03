import React from "react";
import styled from "styled-components";
import Search from "../img/search.png";

const Container = styled.div`
  width: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  @media only screen and (max-width: 768px) {
    width: 50px
  }
`;

const Image = styled.img`
  width: 30px;
`;

const Text = styled.span`
  margin-top: 10px;
  text-align:center;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;



const MiniCard = () => {
  return (
    <Container>
      <Image src={Search} />
      <Text>Service1 type description</Text>
    </Container>
  );
};

export default MiniCard;
