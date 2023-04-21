import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from "react-redux";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { authActions } from "../../store";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { useLocation } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../store/index";
axios.defaults.withCredentials = true;

function BasicExample() {
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const sendLogoutReq = async () => {
    const res = await axios.post("http://localhost:5000/companies/logout", null, {
      withCredentials: true,
    });
    if (res.status == 200) {
      return res;
    }
    return new Error("Unable TO Logout. Please try again");
  };
  const handleLogout = () => {
    sendLogoutReq().then(() => dispatch(authActions.logout()));
  };

  const [value, setValue] = useState();

  return (
    <Naves>
    <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#home">AAmbachew</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
       
          <Nav className="list-navs">
   
          <>
       <Nav.Link href="/usersss"  className="links"><p className="linkss" >USER</p></Nav.Link>
        <Nav.Link href="/id" className="links"><p className="linkss">ADD-COMPANY</p></Nav.Link> 
              <Nav.Link href="/user/:idea"  className="links"><p className="linkss">ADD-EVENT</p></Nav.Link> 
             <Nav.Link href="/user/upd" className="links"><p className="linkss">UPDATE</p></Nav.Link>
           
             <Nav.Link href="/"  onClick={handleLogout} className="links"><span className="login-sign"><Button className="butt-link">LOGOUT</Button></span></Nav.Link>
           
             </>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Naves>
  );
}

export default BasicExample;

const Naves=styled.div`
 .linkss{
        font-size: 18px;
        color: black;
        padding-left:20px;
    }
       .list-navs{
            margin-left: 220px;
            padding-left:50px;
            margin-top:20px;
       } 
       .mb-7{
  width: 90%;
  height: 150px;
  margin-left:20px;
}

    

`;