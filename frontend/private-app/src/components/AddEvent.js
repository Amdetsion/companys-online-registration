import React, { useState,useEffect } from "react";
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const AddEvent = () => {
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
      .post("http://localhost:5000/events", {
        companyName: String(inputs.companyName),
        content: String(inputs.content),
        date: Number(inputs.date),
        
      })
      .then((res) => res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/usersss"));
  };
    return (
    
      <Forms  >
        <div className='mainform'>
            <Form onSubmit={handleSubmit}>   
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={inputs.companyName}name="companyName"onChange={handleChange}/>
        <div className="content">
        <Form.Label>Content</Form.Label>
      <FloatingLabel controlId="floatingTextarea2" label="Comments" >
     
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          value={inputs.content}
          name="content"
          onChange={handleChange}
        />
      </FloatingLabel>
    </div> 
      
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
export default AddEvent;

const Forms=styled.div`
margin-top:100px;
.mb-3{
  width: 450px;
  margin-left: 20px;
  margin-top:50px;
  margin-bottom:50px;
}
.mainform{
  border:2px solid blue;
  width: 700px;
  margin-bottom:100px;
  margin-left:300px;
  border-radius:20px
}
.buttons{
  margin-left:360px;
  margin-top:20px;
  margin-bottom:10px
}
.mb-7{
  width: 90%;
  height: 150px;
  margin-left:20px;
}
.primary{
  width:90px;
}
.content{
  width:600px;
  margin-top:50px;
}
`