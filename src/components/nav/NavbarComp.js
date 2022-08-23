import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";
import Contact from '../Contact';
import Feature from '../Feature';
import styled from "styled-components";



import Intro from '../Intro';
import Price from '../Price';
import App from '../../App2';
import App2 from '../../App2';
import AddJobs from '../Jobs/AddJobs';
import Service from '../Service';
import PriceCard from '../PriceCard';



export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>
                    
                <Navbar bg='#FDFCFB' expand="lg">
                
        <Navbar.Brand href="#" style={{fontweight: 'bold',textDecoration:'crimson',fontWeight:'bold', fontSize:'35px'}}>Future Care Plus</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto"
            style={{ maxHeight: '500px',alignItems:'center'}}
            navbarScroll
          >
            
           
                                <Nav.Link as={Link} to="/home" style={{color:'blue',fontWeight:'bold'}}>Home</Nav.Link>
                                <Nav.Link as={Link} to="/about" style={{color:'blue',fontWeight:'bold'}}>About</Nav.Link>
                                <Nav.Link as={Link} to="/contact"style={{color:'blue',fontWeight:'bold'}}>Contact</Nav.Link>
                                <Nav.Link as={Link} to="/service" style={{color:'blue',fontWeight:'bold'}}>Service</Nav.Link>
                                
                                <Nav.Link as={Link} to="/jobssec" style={{color:'blue',fontWeight:'bold'}}>Jobs</Nav.Link>

                                <Nav.Link as={Link} to="/addjobs">Add Jobs</Nav.Link>
                                <Nav.Link as={Link} to="/jobs">Jobs</Nav.Link>
                    
                            </Nav>

                        </Navbar.Collapse>
                   
                    </Navbar>
                    
                </div>
                <div>
                <Routes>
                    <Route path="/home" element={<App2 />} />
                    <Route path="/about" element={<Feature   />} />
                    <Route path="/service" element={<Service/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/jobssec" element={<PriceCard/>} /> 


                    <Route path="/addjobs" element={<AddJobs/>} />

                </Routes>
                </div>
                </Router>
        )
    }
}