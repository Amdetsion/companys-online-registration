import React, { useEffect, useState, } from "react";
import axios from "axios";
import Company from "./Company";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const DetailComp = ( props) => {
   const id= useParams().id;
   const [company,setCompany]=useState([])
   const { _id, companyName, tinNumber, yearEstablishment, region, phonNumber,website,
    overview,contactPerson,branch,partner,keyTechnology,classfication,logo } = props.company;
     useEffect(()=>{
   axios.get(`http://localhost:5000/companies/${_id}`)
          .then(response=>{
                
           setCompany(response.data[0])

          })

     },[])
    return (
      <Lists>
      <div>
        
      <Companylist>
        <Container>
          <Row  className="col">
            <Col sm={4}>
      <div className="card">
        <img src={logo} className="logo" alt={companyName} />
        <div className="one-holder">
        <h5 className="partner-phone"><span className="one">PARTNER:-</span>{companyName}</h5>
        <h5 className="partner-phone"><span className="one">TIN NO:-</span>{tinNumber}</h5>
        <h5 className="partner-phone"><span className="one">YEAR OF ESTABLISHMENT:-</span>{yearEstablishment}</h5>
        <h5 className="partner-phone"><span className="one">REGION:-</span>{region}</h5>
        <h5 className="partner-phone"><span className="one">PHONE NUMBER:-</span>{phonNumber}</h5>
        </div>
        <div className="two-holder">
        <h5 className="web-contact"><span className="two">WEBSITE:-</span>{website}</h5>
        <h5  className="web-contact"><span className="two">OVERVIEW:-</span>{overview}</h5>
        <h5  className="web-contact"><span className="two">CONTACT PERSON:-</span>{contactPerson}</h5>
        </div>
        <div className="three-holder">
        <h5 className="Branch-classfi"><span className="three">BRANCH:-</span>{branch}</h5>
        <h5 className="Branch-classfi"><span className="three">PARTNER:-</span>{partner}</h5>
        <h5 className="Branch-classfi"><span className="three">KEY TECHNOLOGY:-</span>{keyTechnology}</h5>
        <h5 className="Branch-classfi"><span className="three">classfication:-</span>{classfication}</h5>
        </div>
       
      </div>
      </Col>
      </Row>
      </Container>
      </ Companylist>
      </div>
      </Lists>
    );
}


export default DetailComp;

const Lists=styled.div`
.unorder{
  display: flex;
  flex-direction: row;
  align-content: center;
  padding: 100px;
  flex-wrap: wrap;
}

`
const Companylist=styled.div`
margin-top: 100px;
    .col{
      display:flex;
      flex-direction: column;
    }
    .card{
      height: 960px;
      width: 350px;

      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
   .logo{
    height: 300px;
    width: 345px;
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
  border-bottom: 2px solid blue;
  margin-top: 20px;
 
 }
 .two{
    color: #145DA0;
  }
  .two-holder{
    border-bottom: 2px solid #145DA0;
    margin-top: 30px;
    margin-bottom: 40px;
  }
  .web-contact{
    margin-left: 40px;
  }
  .three-holder{
    border-bottom: 2px solid blue;
  margin-top: 20px;
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
`