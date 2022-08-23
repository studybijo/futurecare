import React from "react";
import styled,{css} from "styled-components";
import App from "../img/women.jpg";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 90%;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 768px) {
    font-size: 50px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;


const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute; 
  top: 0;
  left: 0;
  z-index: -1;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  background-color: pink;
`;




const Feature = () => {
  return (
    <>
    <Container>
      <Left>
        <Image src={App} style={ {marginTop:"150px" }}/>
      </Left>
      <Right>
        <Title>

        </Title>
        <SubTitle>Future Care Plus</SubTitle>

        <Desc>
        Being established in the UK and owned and operated by nurses makes Future Care Plus distinctive. As a result, candidates who sign up with us will have a clear awareness of the UK process, direct contact with possible employers, a fair understanding of UK living, and timely perks like advice and assistance. We assist you at every level of the procedure and immediately lead you in the right direction as a direct hiring agency for firms in the United Kingdom. The goal of Team Future Care Plus is to make each candidate's journey exceptional and exquisite. We promise that you will be completely satisfied, and our experts will do all in their power to allay your worries.

Future Care Plus has been collaborating with clients and carers at a grassroots level. We believe these interactions and relationships guarantee that care is provided for both physical and emotional needs. The foundation of excellent care is being aware and patient-centred, which enables a rapid, thorough assessment of the patient's needs. We are offering something to serve people like never before while showing the highest respect to carers.

Our healthcare staff are carefully selected and hired on a permanent basis with guaranteed minimum hours. We will always enable the highest standards of practice and create a unique culture of trust and empathy, thanks to our continual investment in Clinical Governance, technology, and employee development.
        </Desc>
  
      </Right>
      <AnimatedShapes/>
    </Container>
  <FeatureShape />
    </>
  );
};

export default Feature;
