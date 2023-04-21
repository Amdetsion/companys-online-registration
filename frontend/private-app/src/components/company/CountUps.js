import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from "styled-components";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const CountUps = () => {
    const[counterOn,setcounterOn]=useState(false)

    return (
        <Cou>
        <Container>
        <ScrollTrigger onEnter={()=>setcounterOn(true)} onExit={()=>setcounterOn(false)}>
            <Row >
                <Col sm={3} className="amount">
                   <h2 className="header"> {counterOn &&<CountUp start={0} end={100} duration={5}/>}+</h2>
                      <h3 className='classfication'>SOFTWARE</h3>
                </Col>
                <Col sm={3} className="amounttwo">
                   <h2 className="header">{counterOn &&<CountUp start={0} end={80} duration={5}/>}+</h2>
                   <h3 className='classfication'>HARDWARE</h3>
                </Col>
                <Col sm={3} className="amounttwo">
                   <h2 className="header">{counterOn &&<CountUp start={0} end={110} duration={5}/>}+</h2>
                   <h3 className='classficationthree'>CONSULTANCY</h3>
                </Col>
            </Row>
            <Row className='rowtwo'>
                <Col sm={3} className="amount">
                <h2 className="header">{counterOn &&<CountUp start={0} end={50} duration={5}/>}+</h2>
                   <h3 className='classfication'>NETWORK</h3>            
                </Col>
                <Col sm={3} className="amounttwo">
                <h2 className="header">{counterOn &&<CountUp start={0} end={130} duration={5}/>}+</h2>
                   <h3 className='classfication'>E-COMERCE</h3>  
                </Col>
                <Col sm={3} className="amounttwo">
                <h2 className="header">{counterOn &&<CountUp start={0} end={150} duration={5}/>}+</h2>
                   <h3 className='classfication'>Training</h3> 
                </Col>
            </Row>
            </ScrollTrigger>
        </Container>
        </Cou>
    )
}

export default CountUps

const Cou=styled.div`
margin-top:30px;
margin-bottom:70px;
.amount{
    border:1px solid blue;
    padding-left:5px;
    padding-right:5px;
    width:220px;
   
    margin-left:100px;
    border-radius:10px;

}

.header{
    color:blue;
    padding-left:70px;
}
.classfication{
    color:#6495ED;
    padding-left:35px;
}
.amounttwo{
    margin-left:120px;
    border:1px solid blue;
    padding-left:5px;
    padding-right:5px;
    width:220px;
   
    margin-left:100px;
    border-radius:10px
}
.classficationthree{
    color:#6495ED;
    padding-left:15px;
}
.rowtwo{
    margin-top:70px;
}
`