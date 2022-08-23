import React,{useState} from "react";
import styled from "styled-components";
import Map from "../img/map.png";
import Phone from "../img/phone.png";
import Send from "../img/send.png";
import axios from "axios";

const Container = styled.div`
  height: 90%;
  background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  margin: 50px;
  margin-top: 0;
  @media only screen and (max-width: 768px) {
    margin: 20px;
  }
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media only screen and (max-width: 768px) {
    height: 50%;
    margin-right: 0;
  }
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    height: 50%;
  }
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;
  @media only screen and (max-width: 768px) {
    padding: 5px;
  }
`;

const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
  @media only screen and (max-width: 768px) {
    padding: 5px;
    margin-top: 20px;
  }
`;

const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    padding: 5px;
    font-size: 14px;
  }
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 768px) {
    width: 15px;
  }
`;

const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Contact = () => {
 
  const[yourname,setYourname]=useState("")
  const[email,setEmail]=useState("")
  const[subject,setSubject]=useState("")
  const[message,setMessage]=useState("")


  function sendData(event){
    
    event.preventDefault();
    axios.post('https://futurecare.herokuapp.com//create',{yourname:yourname,email:email,subject:subject,message:message})
    .then((res) =>console.log("succefully"))
    .catch(error => {
      alert("not send");
        console.error('There was an error!', error);
    });



  
};

  


  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions? <br /> Let's Get In Touch
          </Title>
          <Form>
            <LeftForm>
              <Input onChange={(e)=>{setYourname(e.target.value)}} name='yourname' value={Input.yourname} placeholder="Your Name" />
              <Input onChange={(e)=>{setEmail(e.target.value)}} name='email' value={Input.email} placeholder="Your Email" />
              <Input onChange={(e)=>{setSubject(e.target.value)}} name='subject' value={Input.subject} placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea onChange={(e)=>{setMessage(e.target.value)}} name='message' value={Input.message} placeholder="Your Message" />
              <Button onClick={sendData}>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>Address1, Address2, UK</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>+44 7443 003369</Text>
            <Text>+44 7443 003369</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>care@futurecare.com</Text>
            <Text>jobs@futurecare.com</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
