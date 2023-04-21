import React, { useState,useEffect } from "react";
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import axios from "axios";

import { useNavigate } from "react-router-dom";


const AddUpdate = () => {
    const history = useNavigate();
  // the above code used for private routing
  //********************************************************8 */
  const [inputs, setInputs] = useState({
    companyName:"",
    content:"",
    date:"",
    
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
      .post("http://localhost:5000/updates", {
        companyName: String(inputs.companyName),
        content: String(inputs.content),
        date: Number(inputs.date),
        
      })
      .then((res) => res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/companys"));
  };
    return (
    
      <Forms  >
        <div className='main-form'>
            <Form onSubmit={handleSubmit}>   
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={inputs.companyName}name="companyName"onChange={handleChange}/>
       
      </Form.Group>
      <Form.Group className="mb-7" controlId="formBasicEmail">
        <Form.Label>content</Form.Label>
        <Form.Control as="textarea" placeholder="Enter email" value={inputs.content} name="content" onChange={handleChange}  rows="6"/>
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={inputs.date} name="date" onChange={handleChange} />
       
      </Form.Group>

      <div className="buttons">
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
    </Form>
    </div>
    </Forms>

   
    )
}
export default AddUpdate;

const Forms=styled.div`
margin-top:100px;
.mb-3{
  width: 450px;
  margin-left: 20px;
  margin-top:50px;
  margin-bottom:50px;
}

.main-form{
  border:2px solid blue;
  width: 800px;
  margin-bottom:100px;
  margin-left:300px;
  border-radius:20px
}
.mb-7{
  width: 90%;
  height: 150px;
  margin-left:20px;
}
.primary{
  width:90px;
}
.buttons{
  margin-left:360px;
  margin-top:20px;
  margin-bottom:10px
}
`