import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {   BsFillTelephoneFill,BsFillEnvelopeFill,BsFacebook } from "react-icons/bs";

const ContactMap = (props) => {
   const { _id,  phone, email,  facebook} = props.content;
    return <Mintmap>
 <Container>
      <Row>
        <Col sm={6}>
                <div className='mapss'>
          <iframe className="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=Addis Abeba&t=&z=10&ie=UTF8&iwloc=&output=embed">
              </iframe><a href="https://piratebay-proxys.com/"></a>
              </div>
        </Col>
        
         
        <Col sm={6}>
        <div>
        <h5 className='header'>AMDETSION AMBACHEW TECHNOLOGY</h5>
           </div>
           <div className='contaa'>
           <p className='conta'>  <BsFillTelephoneFill className="cont"/>  :-{ phone}</p>
          <p className='conta'>  < BsFillEnvelopeFill className="cont"/> :-{email}</p>
           <p className='conta'> < BsFacebook className="cont"/>:-{facebook}</p>
           </div>
        </Col>
      </Row>
      
    </Container>



    </Mintmap>;
}

export default ContactMap;

const Mintmap=styled.div`
margin-top: 100px;
margin-bottom:100px;
   .gmap_iframe{
    width: 600px;
    height: 400px;
    border: 2px solid blue;
   }
   .mapss{
  
   }
   .header{
    margin-top:80px;
     margin-left:100px;
   }
   .cont{
font-size: 20px;
color: blue;
   }
   .conta{
font-size: 20px;
margin-left:100px;

   }
   .contaa{
      margin-top:60px;
      margin-left:90px;
   }
`