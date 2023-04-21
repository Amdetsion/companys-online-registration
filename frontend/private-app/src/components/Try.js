import React, { useState,useEffect } from "react";
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PublicNavbar from "./Navbars/PublicNavbar";

import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;
let firstRender = true;

const Try = () => {
  const history = useNavigate();
  const [user, setUser] = useState();

  const refreshToken = async () => {
    const res = await axios
      .get("http://localhost:5000/companies/refresh", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  const sednRequest = async () => {
    const res = await axios
      .get("http://localhost:5000/companies/user", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      sednRequest().then((data) => setUser(data.user));
    }
    let interval = setInterval(() => {
      refreshToken().then((data) => setUser(data.user));
    }, 1000 * 29);
    return () => clearInterval(interval);
  }, []);
  // the above code used for private routing
  //********************************************************8 */
  const [inputs, setInputs] = useState({
    logo:"",
    companyName:"",
    tinNumber:"",
    yearEstablishment:"",
    region:"",
    phonNumber:"",
    website:"",
    overview:"",
    contactPerson:"",
    branch:"",
    partner:"",
    keyTechnology:"",
    classfication:"Software",
    classfication:"Hardware",
    classfication:"Datbase",
    classfication:"Consultancy"
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Value", e.target.value);
  };
  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/companies", {
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
    sendRequest().then(() => history("/books"));
  };
    return (
       
    <Forms >
        <Container >
               <Form onSubmit={handleSubmit} >
               <div className="firstgroup" classname="formcontainer">
        <Row className="rowss">
            <h1 className="headers">PART ONE</h1>
          <Col sm={6}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>logo</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={inputs.logo} name="logo" onChange={handleChange}/>
        
      </Form.Group>


          </Col>
          <Col sm={6} className="Ministry" >
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={inputs.companyName}name="companyName"onChange={handleChange}/>
      </Form.Group>
              </Col>
        </Row>
        <Row className='rowsss'>
              
          <Col sm={6}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Tin-Number</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={inputs.tinNumber}name="tinNumber" onChange={handleChange} />
        
      </Form.Group>
          </Col>
          <Col sm={6} className="Ministry">
            
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Year of Establishment</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={inputs.yearEstablishment} name="yearEstablishment" onChange={handleChange} />
       
      </Form.Group>
              </Col>   
                  
        </Row>
        </div > 
        
        <div className="firstgroup">
        <Row className="rowss">
        <h1 className="headers">PART TWO</h1>
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
           <Row className="rowsss">
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
              <Row className="rowss">
              <h1 className="headers">PART THREE</h1>
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
                     <Row className="rowsss">
                          <Col sm={6}>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Key Technology</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={inputs.keyTechnology} name="keyTechnology" onChange={handleChange}/>
        
      </Form.Group>

                          </Col>
                          <Col sm={6} className="select">

                         
                          <Form.Select aria-label="Default select example" >
      <option  >Open this select menu</option>
      <option value={inputs. classfication} name=" classfication" onChange={handleChange}>Software</option>
      <option value={inputs. classfication} name=" classfication" onChange={handleChange}>Hardware</option>
      <option value={inputs. classfication} name=" classfication" onChange={handleChange}>Datbase</option>
      <option value={inputs. classfication} name=" classfication" onChange={handleChange}>Consultancy</option>
    </Form.Select>
                           </Col>

                     </Row>

           </div>
           <Button variant="primary" type="submit" className="butt">
        Submit
      </Button>
        </Form>
       
      </Container>
      </Forms>
   
    )
}
export default Try;

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


