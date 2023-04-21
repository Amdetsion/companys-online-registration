import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from "react-redux";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { authActions } from "../../store";
import axios from "axios";
import Button from 'react-bootstrap/Button';
axios.defaults.withCredentials = true;

function PublicNavbar() {

  const [value, setValue] = useState();

  return (
    <Naves>
    <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#home">AAmbachew</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="list-navs">
          
           <Nav.Link href="/" className="links"><p className="linkss">Home</p></Nav.Link>
            <Nav.Link href="/about"  className="links"><p className="linkss">About-us</p></Nav.Link>
            <Nav.Link href="/contact" className="links"><p className="linkss">Contact</p></Nav.Link>
            <Nav.Link href="/views" className="links"><p className="linkss">Companies</p></Nav.Link>
            <Nav.Link href="/eventss" className="links"><p className="linkss">Event</p></Nav.Link>
            <Nav.Link href="/pubnew" className="links"><p className="linkss">News</p></Nav.Link>
            <Nav.Link href="/login" className="link"><span className="login-sign"><Button className="butt-link">Login</Button></span></Nav.Link>
            <Nav.Link href="/signup" className="links"><span className="login-sign"><Button className="butt-link">Signup</Button></span></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Naves>
  );
}

export default PublicNavbar;

const Naves=styled.div`

    .linkss{
        font-size: 18px;
        color: black;
        padding-left:20px;
    }
       .list-navs{
        margin-left: 150px;
            padding-left:50px;
            margin-top:20px;
       }

       @media screen and (min-width: 360px) and (max-width:500px){
        
       }

       

`;