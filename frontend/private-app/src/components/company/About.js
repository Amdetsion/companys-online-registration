import React,{ useState, useEffect }  from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {   BsFillTelephoneFill,BsFillEnvelopeFill,BsFacebook } from "react-icons/bs";
import AOS from 'aos';
import "aos/dist/aos.css";
const About = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 3000,
            delay: 200,
            once: false,
          });
      }, []);
   const { _id, aboutus} = props.content;
    return <Mintmap>
 <Container>
      <Row>
        <Col sm={12}>
            <p classname="paragraph" data-aos="zoom-in-up">


      {aboutus}          
            </p>
        </Col>
        <Col sm={12} classname="paragraphs">
            <p  data-aos="zoom-in-up">


      {aboutus}          
            </p>
        </Col>
       
      </Row>
      
    </Container>



    </Mintmap>;
}

export default About;

const Mintmap=styled.div`
 margin-top:100px;
 margin-bottom:100px;
.paragraph{
    margin-left:50px;
    margin-right:50px;
    margin-top:150px;
}
.paragraphs{
    margin-top:100px;
    margin-left:50px;
    margin-right:50px;
   
}
`