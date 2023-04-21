
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lo from '../../img/west-01.jpg'
import styled from 'styled-components';
import AOS from 'aos';
import "aos/dist/aos.css";
const Message = (props) => {
    const history = useNavigate();
    
    const { _id, messageMinistry, messageDirector, imgmnister,imgdirector } = props.content;
    useEffect(() => {
        AOS.init({
            duration: 3000,
            delay: 200,
            once: false,
          });
      }, []);
    
    return <Messages>
    <Container>
      <Row>
            
        <Col sm={4}><img src={imgmnister} alt="hiie" /></Col>
        <Col sm={8} className="Ministry" >
            <h3 className="Ministrymess"> <span className='mess'>MESSAGE OF</span> THE CEO </h3>
            <div >
            <p className='minipara' data-aos="fade-up"> {messageMinistry}.</p>
                </div>
            </Col>
      </Row>
      <Row className='rowtwo'>
            
        <Col sm={4}><img src={imgdirector} alt="hiie" /></Col>
        <Col sm={8} className="Ministry">
            <h3 className="Ministrymess"><span className='mess'> MESSAGE OF </span> THE DIRECTOR </h3>
            <p className='minipara' data-aos="fade-up"> {messageDirector}</p>
            
            </Col>
      </Row>
    </Container>

    </Messages>;
}

export default Message;

const Messages=styled.div`
   margin-top: 100px;
.Ministry{
   margin-top: 20px;
   
}
.Ministrymess{
    margin-left:85px;

}
.minipara{
    padding-top: 50px;
}
.rowtwo{
    margin-top: 100px;
}
.mess{
    color:blue;
}
`