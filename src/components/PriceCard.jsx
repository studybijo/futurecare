import React,{useEffect} from "react";
import styled,{css} from "styled-components";



const Container = styled.div`
display: flex;
flex-direction :row
height: 100%;

  
  @media only screen and (max-width: 768px) {

    flex-direction: column;
  }
`;


const CardContainer = styled.div`


  margin-top: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 400px;
  padding: 5px;

  justify-content:space-between;

  top: 10%;
  left: 0;
  right: 0;
 


  @media only screen and (max-width: 768px) {
    flex-direction: column;
   
    max-height: 300px;
  }
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 50px;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
const bContainer=styled.div`
display: flex;
`;
const Type = styled.button`
  padding: 10px;
  margin: 10px 0;
  border: 1.5px solid crimson;
  color: crimson;
  background-color: white;
  border-radius: 20px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin: 10px 0;
  
  @media only screen and (max-width: 768px) {
    margin: 10px;
    font-size: 12px;
  }
`;

const Button = styled.button`
  border: none;
  background-color: darkblue;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 5px;
  }
`;
const Title = styled.h1`
font-size:20px;

`;

const Company=styled.h2`
font-size:20px;
font-weight:normal;

`;

const smDesc=styled.li`
margin: 30px 0;
@media only screen and (max-width: 768px) {
  margin: 10px;
  font-size: 12px;
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


const PriceCard = ({ title,company,smDesc,location,salaryfrom,salaryTo }) => {



  return (
    <Container>
      <CardContainer>
      <Title>{title}</Title>
      <Company>{company}</Company>
      <List>
      <ListItem>{smDesc}</ListItem>{" "}
        
        <ListItem><b>Salary :</b> {salaryfrom} - {salaryTo} </ListItem>
        <ListItem>Location : {location}</ListItem>
         
      </List>
   
      <Button>Know More </Button>    
   
        </CardContainer>
      
        
      
</Container>

    

  );
};

export default PriceCard;
