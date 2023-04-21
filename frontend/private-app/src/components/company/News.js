import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

function News(props) {
  const history = useNavigate();
    const { _id, newsImageone,newsImagetwo,newsImagethree,newsHeadlineOne,
        newsHeadlineTwo,newsHeadlineThree, } = props.content;
    const deleteHandler = async () => {
      await axios
        .delete(`http://localhost:5000/content/${_id}`)
        .then((res) => res.data)
        .then(() => history("/"))
        .then(() => history("/companies"));
    };
  

  return (
    <New>    
      <Container className='conta' >
        <div className='newsheader'>
        <h1 className='newsheaders'><span className='ne'>NE</span>
        <span className='nee'>WS</span> </h1>
        </div>
      <div className='newscon'>

        
        <Row className='basic'>
            <Col sm={4}>
    <Card style={{ width: '18rem' }} className="card-amde">
      <Card.Img variant="top" src={ newsImageone} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          {newsHeadlineOne}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col sm={4}>
    <Card style={{ width: '18rem' }} className="card-amde">
      <Card.Img variant="top" src={newsImagetwo} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          {newsHeadlineTwo}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col sm={4}>
    <Card style={{ width: '18rem' }} className="card-amde">
      <Card.Img variant="top" src={newsImagethree} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          {newsHeadlineThree}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    
    </Row>
    </div>
    </Container>
   
    </New>
  );
}

export default News;

const New=styled.div`
 
margin-bottom:50px;
margin-left:0px;
.ne{
color:blue;
}
.newscon{
  background-image:url("kanymr-01.jpg");
 width:1150px;
 background-repeat: no-repeat;
 
 padding-left:0px;
 
}
.card-amde{
  margin-top:60px;
  margin-left:10px;
  margin-bottom:60px;
}
.conta{
  margin-left:0px;
}
.newsheader{
  margin-left:300px;
  margin-bottom:60px;
  font-size:70px;

}
.basic{
  margin-left:0px;
}
.newsheaders{
  font-size:60px;
}
`