import React,{ useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const SmallCompany = (props) => {


  
    const history = useNavigate();
    const { _id, companyName, tinNumber, yearEstablishment, region, phonNumber,website,
      overview,contactPerson,branch,partner,keyTechnology,classfication,logo,capital, employe } = props.company;
      const values = [true];
      const [fullscreen, setFullscreen] = useState(true);
      const [show, setShow] = useState(false);
    
      function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
      }
    
    return (
      
      <Companylist>
   
    <Container>
    <Row>
     
    </Row>
    
     </Container>
        <Container>
       
          <Row  className="col">
            <Col sm={4}>
      <div className="card">
        <img src={logo} className="logo" alt={companyName} />
        <div className="one-holder">
        <h5 className="companyName"><span className="one"></span>{companyName}</h5>
        <h5 className="phonclaass"><span className="one">-</span>{phonNumber}</h5>
        <h5 className="phonclaass"><span className="one"></span>{classfication}</h5>
       
        {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2 buttons" onClick={() => handleShow(v)} >
          View-Detail
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} dialogClassName= "myModalStyle" onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{companyName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
        
            <Row>
              <Col>
          <p className="label">phone Number</p>
          </Col>
          <Col>
          <p className="bodys">{phonNumber}</p>
          </Col>
          </Row>
               <Row>
                <Col>
          <p className="label">Tin Number:</p>
          </Col>
          <Col>
          <p className="bodys">{tinNumber}</p>
          </Col>
          </Row>
          
          <Row>
          <Col>
          <p className="label">year of establishmeny:</p>
          </Col>
          <Col>
          <p className="bodys">{yearEstablishment}</p>
          </Col>
          </Row>
          <Row>
            <Col>
          <p className="label">region</p>
          </Col>
          <Col>
          <p className="bodys">{region}</p>
          </Col>
          </Row>
          <Row>
            <Col>
          <p className="label">Website:</p>
          </Col>
          <Col>
          <p className="bodys">{website}</p>
          </Col>
          </Row>
          
          <Row>
            <Col>
          <p className="label">Contact-Person:</p>
          </Col>
          <Col>
          <p className="bodys">{contactPerson}</p>
          </Col>
          </Row>
          <Row>
          <Col>
          <p className="label">Branch:</p>
          </Col>
          <Col>
          <p className="bodys">{branch}</p>
          </Col>
          </Row>
          <Row>
            <Col>
          <p className="label">Key-Technology</p>
          </Col>
          <Col>
          <p className="bodys">{keyTechnology}</p>
          </Col>
          </Row>
          <Row>
          <Col>
          <p className="label">Partner</p>
          </Col>
          <Col>
          <p className="bodys">{partner}</p>
          </Col>
          </Row>
          <Row>
            <Col>
          <p className="label">Classfication</p>
          </Col>
          <Col>
          <p className="bodys">{classfication}</p>
          </Col>
          <Row>
          <Col>
          <p className="label">NUMBER OF EMPLOYE</p>
          </Col>
          <Col>
          <p className="bodys">{employe}</p>
          </Col>
          </Row>
          <Row>
          <Col>
          <p className="label">CAPITAL</p>
          </Col>
          <Col>
          <p className="bodys">{capital}</p>
          </Col>
          </Row>
          </Row>
          <Row>
            <Col>
          <p className="label">Overview:</p>
          </Col>
          <Col>
          <p className="overbodys">{overview}</p>
          </Col>
          </Row>
          </Container>
        </Modal.Body>
      </Modal>


       
    </div>
       
      </div>
      </Col>
      </Row>
      </Container>
    </Companylist>
   
    );
}

export default SmallCompany;

const Companylist=styled.div`
margin-top: 30px;
    .col{
      display:flex;
      flex-direction: column;
    }
    .card{
      height: 460px;
      width: 250px;

      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
       }
       .card:hover{
        transform: scale(1.05);
       }
   .logo{
    height: 250px;
    width: 250px;
   }
 .button{
  height: 40px;
    width: 200px;
    margin-top:50px;
 }
 .partner-phone{
  margin-left: 40px;
 }
 .one{
  color: blue;
  margin-top: 40px;
 }
 .one-holder{
 
  margin-top: 20px;
 
 }
 .two{
    color: #145DA0;
  }
  .two-holder{
    
    margin-top: 30px;
    margin-bottom: 40px;
  }
  .web-contact{
    margin-left: 40px;
  }
  .three-holder{

  }
  .Branch-classfi{
    margin-left: 40px;
  }
  .three{
    color: #145DA0;
  }
  .buttons{
    margin-left: 60px;
  }
 .modal-name{
  margin-right: 60px;
  color: blue;
 }
 .modalcontainer{
  background-color: red;
  width:900px;
 }
 .companyName{
  color:blue;
  margin-left: 15px;
 }
 .buttons{
  margin-left: 50px;
 
 }
 .buttoncontroller{
  margin-top:40px
 }
 .phonclaass{
   margin-left: 60px;
  font-size:16px
 }
 .modals{
 
  width:700px;
 }
 .modalss{
  max-width: none !important;
   width:700px;
 }
 .overbodys{
  width: 400px;
 }
 .bsinnerlogo{
  height: 250px;
    width: 250px;;
margin-left:300px;
border-bottom:2px solid black;
max-width: none!important;
 }
 .buttons{
  margin-left:50px;
  margin-top:20px;
 }
.myModalStyle{
  width: 90%;
    max-width: none!important;
}
`
