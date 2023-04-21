import React, { useState,useEffect } from "react";
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams } from "react-router-dom";
  
  const CompanyDetail = () => {
    const [inputs, setInputs] = useState();
    const id = useParams().id;
    
    const history = useNavigate();
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:5000/companies/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.company));
      };
      fetchHandler();
    }, [id]);
  
    const sendRequest = async () => {
      await axios
        .put(`http://localhost:5000/companies/${id}`, {
            logo: String(inputs.logo),
            companyName: String(inputs.companyName),
            tinNumber: String(inputs.tinNumber),
            yearEstablishment: Number(inputs.yearEstablishment),
            region: String(inputs.region),
            phonNumber: Number(inputs.phonNumber),
            website: String(inputs.website),
            partner: String(inputs.partner),
            overview: String(inputs.overview),
            contactPerson:String(inputs.contactPerson),
            branch: String(inputs.branch),
            keyTechnology: String(inputs.keyTechnology),
            classfication: String(inputs.classfication),
        
        })
        .then((res) => res.data);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest().then(() => history("/companys"));
    };
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    return (
      <div>
        {inputs && (
           <Forms >
          <Container>
          <Form onSubmit={handleSubmit} className='main-form'>
            <div className="firstgroup">
              <h1 className="headers">PART ONE</h1>
            <Row className="rowss">
              <Col sm={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>logo</Form.Label>
       <Form.Control type="text" placeholder="Enter email" value={inputs.logo} name="logo" onChange={handleChange}/>
       
     </Form.Group>
              </Col>
              <Col sm={6}>
              
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Company Name</Form.Label>
       <Form.Control type="text" placeholder="Enter email" value={inputs.companyName}name="companyName"onChange={handleChange}/>
      
     </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Tin-Number</Form.Label>
       <Form.Control type="text" placeholder="Enter email" value={inputs.tinNumber}name="tinNumber" onChange={handleChange} />
       
     </Form.Group>
              </Col>
              <Col sm={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Year of Establishment</Form.Label>
       <Form.Control type="text" placeholder="Enter email" value={inputs.yearEstablishment} name="yearEstablishment" onChange={handleChange} />
      
     </Form.Group>
              </Col>
            </Row>
            </div>
            <div className="firstgroup">
              <h1 className="headers">PART TWO</h1>
            <Row>
              <Col sm={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Region</Form.Label>
       <Form.Control type="text" placeholder="Enter email" value={inputs.region} name="region" onChange={handleChange}/>
      
     </Form.Group>
              </Col>
              <Col sm={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Phone Number</Form.Label>
       <Form.Control type="text" placeholder="Enter email" value={inputs.phonNumber} name="phonNumber"  onChange={handleChange}/>
      
     </Form.Group>
              </Col>
            </Row>
            <Row className="rowss">
              <Col sm={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Website</Form.Label>
       <Form.Control type="text" placeholder="Enter email" value={inputs.website} name="website" onChange={handleChange} />
      
     </Form.Group>
              </Col>
              <Col sm={6}>
              
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Contact Person</Form.Label>
       <Form.Control type="text" placeholder="Enter email"  value={inputs.contactPerson} name="contactPerson" onChange={handleChange}/>
      
     </Form.Group>
              </Col>
            </Row>
            </div>
            <div className="firstgroup">
              <h1 className="headers">PART THREE</h1>
            <Row className="rowss">
              <Col sm={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>branch</Form.Label>
       <Form.Control type="text" placeholder="Enter email" value={inputs.branch} name="branch" onChange={handleChange}/>
      
     </Form.Group>
              </Col>
              <Col sm={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Partner</Form.Label>
       <Form.Control type="text" placeholder="Enter email" value={inputs.partner} name="partner" onChange={handleChange} />
       
     </Form.Group>
              </Col>
            </Row>
            <Row className="rowss">
              <Col sm={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Key Technology</Form.Label>
       <Form.Control type="text" placeholder="Enter email" value={inputs.keyTechnology} name="keyTechnology" onChange={handleChange}/>
       
     </Form.Group>
              </Col>
              <Col sm={6}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Classfication</Form.Label>
       <Form.Control type="text" placeholder="Password" value={inputs.classfication} name="classfication" onChange={handleChange} />
     </Form.Group>
              </Col>
            </Row>
            </div>

            <Row className="rowss">
            <h1 className="headers">PART FIVE</h1>
            <Col sm={12}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>overview</Form.Label>
        <Form.Control as="textarea" placeholder="Enter email" value={inputs.overview}name="overview"onChange={handleChange} rows={6} className="messageMinistry"/>
       
      </Form.Group>
          </Col>

            </Row>
            <div>

            <Button variant="primary" type="submit"  className="butt">
       Submit
     </Button>
            </div>
            </Form>
          </Container>
   
   </Forms>
        )}
      </div>
    );
  };
  
  export default CompanyDetail;
  
  const Forms=styled.div`
   margin-left:100px;
margin-right:100px;
border: 2px solid blue;
border-radius:20px;
margin-top:100px;
margin-bottom:100px;



.firstgroup{
    border-bottom:0.5px solid #959595;
    width: 100%;
    margin-left:0;
    margin-right:0;
    margin-top:60px;
    
}
.formcontainer{
   
}
.rowsss{
   margin-bottom:60px;
}
.butt{
    margin-top: 60px;
    width: 480px;
    margin-left:200px;
    margin-bottom:60px;
}
.headers{
    margin-bottom:30px;
    
}
.select{
  margin-top:30px;
}


`