import styled, { css } from "styled-components";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

import Navbar from "./components/Navbar";

import NavbarComp from "./components/nav/NavbarComp";

import Price from "./components/Price";
import Service from "./components/Service";

import { useSelector } from "react-redux";
import AllJobs from "./components/AllJobs";
import Card from "./components/Card";
import PostJobs from "./components/PostJobs";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
const Containerb = styled.div`
  height: 150vh;
  overflow: hidden;
  position: relative;
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

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  background-color: pink;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
  background-color: #f88497;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
`;

const App2 = () => {



  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <>
      <Container>
       

        <Intro />
        <IntoShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service />
        {!smallScreen && <ServiceShape />}
      </Container>
      <Containerb>
        <Price />
        <PriceShape />
      </Containerb>
     
      <Container>
     
        <Contact />
        <Footer />
      </Container>
    </>
  );
};

export default App2;
