import React,{useEffect} from "react";
import styled,{css} from "styled-components";
import PriceCard from "./PriceCard";

import {useSelector,useDispatch} from 'react-redux'
import { getAllJobs } from '../redux/actions/JobActions';
import './Price.css'; 

const Container = styled.div`
  height: 100%;
 
  align-items: center;
  justify-content: center;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(12rem,25rem));
  top:2rem;
  width:auto;



  @media only screen and (max-width: 768px) {
    display:grid;
    flex-direction: column;
    
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

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
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
  margin-left:500px;
`;
const Price = () => {



  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getAllJobs())
  },[])
  
  const {jobs}=useSelector(state=>state.jobsReducer)
  const size = 6
const items = jobs.slice(0, size)
console.log(items);
  return (
    <Container>
   
      {items.map((cData)=>{
        return <PriceCard title={cData.title} location={cData.department} company={cData.company} smDesc={cData.smallDescription} price={cData.salaryFrom} salaryfrom={cData.salaryFrom} salaryTo={cData.salaryTo} type="Basic" />
      }
      )}
  <div class="wrap1">
  <button  id="b1" class="button">View More Jobs</button>

</div>

    </Container>
  );
};

export default Price;
