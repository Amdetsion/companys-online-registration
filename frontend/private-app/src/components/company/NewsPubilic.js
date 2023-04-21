
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const NewsPubilic = (props) => {
    const history = useNavigate();
    const { _id, newstitle,newscontent,date} = props.news;
    const deleteHandler = async () => {
      await axios
        .delete(`http://localhost:5000/news/${_id}`)
        .then((res) => res.data)
        .then(() => history("/"))
        .then(() => history("/companies"));
    };
  
    return (
      <Companylist>
        <Container>
          <Row  className="col">
            <Col sm={12}>
      <div >
       
        <div className="one-holder">
            <div className="title">
        <h5 className="partner-phone"><span className="one"></span>{newstitle}</h5>
        </div>
        <div className="newscontent">
        <h5 className="partner-phone"><span className="one"></span>{newscontent}</h5>
        </div>
        <div className="date">
        <h5 className="partner-phone"><span className="one"></span>Date:{date}</h5>
        </div>
        </div>
    
      </div>
      </Col>
      </Row>/
      </Container>
      </ Companylist>
    );
}

export default NewsPubilic;

const Companylist=styled.div`
.col{
    border-bottom:2px solid blue;
    width: 1000px;
}
.buttons{
    margin-bottom: 50px;
    margin-left:450px;
    margin-top:100px
}
.title{
    margin-top:50px;
    margin-bottom:60px;
}
.newscontent{
    margin-left: 0px;
    margin-right:0px;
    background-color:#F7F7FF;
    padding-left:100px;
    padding-right:100px;
    padding-top:80px;
    padding-bottom:80px;
    border-radius:20px
}
.date{
    margin-left: 800px;
    padding-top:30px;
}
`