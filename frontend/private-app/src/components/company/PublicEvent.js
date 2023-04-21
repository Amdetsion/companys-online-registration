import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from 'aos';

const PublicEvent = (props) => {
    const history = useNavigate();
    const { _id, companyName,date, content,   } = props.event;
    const deleteHandler = async () => {
      await axios
        .delete(`http://localhost:5000/events/${_id}`)
        .then((res) => res.data)
        .then(() => history("/"))
        .then(() => history("/event"));
    };
    useEffect(() => {
      AOS.init({
          duration: 3000,
          delay: 200,
          once: false,
        });
    }, []);
  
  
    return (
      <Companylist>
        <Container>
          <Row>
            <Col>
      <div className="eventholder">
       
        <div className="one-holder">
         
        <h1 className="companyname">{companyName}</h1>
      
        <h4 className="content">{content}</h4>
        <h5 className="date">date:-{date}</h5>
        </div>
        
        
        </div>
        </Col>
        </Row>
        </Container>
     
      </ Companylist>
    );
}

export default PublicEvent;

const Companylist=styled.div`
  overflow-x: hidden;
margin-left:50px;
margin-top: 50px;
  margin-top:100px;
.eventholder{
  border:0px solid black;
  margin-left: 50px;
  margin-right: 100px;
  width:1000px;
  height:500px;
  margin-top: 50px;
  margin-top:100px;
  border-radius: 20px;
  background-image:url("event.jpg")
}
       .companyname{
            margin-left: 200px;
            margin-top:60px;
           padding-top:40px;
           color:white;
}
.content{
  margin-left: 130px;

  margin-right:100px;
  
  text-align: justify;
  margin-top:100px;
  color:white;
}
.date{
  margin-left:800px;
  margin-top:100px;
  margin-bottom:30px;
  color:white;
}
.button{
  margin-left: 300px;
  margin-top:40px
}

`