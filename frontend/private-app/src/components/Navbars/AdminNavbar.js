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

function AdminNavbar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const sendLogoutReq = async () => {
    const res = await axios.post("http://localhost:5000/admin/logout", null, {
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
          <Nav.Link href="/admsamp" className="links"><p className="linkss">Admin</p></Nav.Link>
           <Nav.Link href="/companys" className="links"><p className="linkss">Company</p></Nav.Link>
            <Nav.Link href="/events"  className="links"><p className="linkss">Event</p></Nav.Link>
            <Nav.Link href="/update" className="links"><p className="linkss">Update</p></Nav.Link>
            <NavDropdown title="Content" id="basic-nav-dropdown" className="linkss">
              <NavDropdown.Item href="/content">update-content</NavDropdown.Item>
              <NavDropdown.Item href="/addcont">
                add-content
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Address</NavDropdown.Item>
            
              
            </NavDropdown>
            <Nav.Link href="/admsignup"  className="links"><span className="login-sign"><Button className="butt-link">User</Button></span></Nav.Link>
            <Nav.Link href="/"  onClick={handleLogout} className="links"><span className="login-sign"><Button className="butt-link">Logout</Button></span></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Naves>
  );
}

export default AdminNavbar;

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