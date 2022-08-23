import React,{useEffect} from "react";
import styled from "styled-components";

import {useSelector,useDispatch} from 'react-redux'
import { getAllJobs } from '../redux/actions/JobActions';
import PriceCard from "./PriceCard";


const Container = styled.div`

 
  align-items: center;
  justify-content: center;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(12rem,25rem));
  top:2rem;



  @media only screen and (max-width: 768px) {
    display:grid;
    flex-direction: column;
    
  }
`;



const AllJobs = () => {



  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getAllJobs())
  },[])
  
  const {jobs}=useSelector(state=>state.jobsReducer)


  return (

    
    
    <Container>
      {jobs.map((cData)=>{
        return <PriceCard title={cData.title} location={cData.department} company={cData.company} smDesc={cData.smallDescription} price={cData.salaryFrom} salaryfrom={cData.salaryFrom} salaryTo={cData.salaryTo} type="Basic" />
      }
      )}

    </Container>
  );
};

export default AllJobs;
