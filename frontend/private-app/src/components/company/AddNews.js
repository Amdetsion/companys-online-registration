import React, { useState,useEffect } from "react";
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import axios from "axios";

import { useNavigate } from "react-router-dom";


const  AddNews = () => {
    const history = useNavigate();
  // the above code used for private routing
  //********************************************************8 */
  const [inputs, setInputs] = useState({

    newstitle:"",
    newscontent:"", 
    date:"",
    
     
    
  })
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Value", e.target.value);
  };
  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/news", {
        
      newstitle:String(inputs.newstitle),
      newscontent:String(inputs.newscontent), 
      date:Number(inputs.date),
     
      })
      .then((res) => res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/companys"));
  };
    return (
    
      <Forms className='main-form' >
        <div className="forms">
            <Form onSubmit={handleSubmit}>  
            <div className="inerform"> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>News Title</Form.Label>
        <Form.Control as="text" placeholder="Enter email" value={inputs.newstitle}name="newstitle"onChange={handleChange} rows={6} className="title"/>
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>News Content</Form.Label>
        <Form.Control as="textarea" placeholder="Enter email" value={inputs.newscontent} name="newscontent" onChange={handleChange} className="content" row={8} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date</Form.Label>
        <Form.Control as="text" placeholder="Enter email" value={inputs.date} name="date" onChange={handleChange} rows={6} className="title" />
       
        </Form.Group>
       
      <div className="butt">
      <Button variant="primary" type="submit" className="butonss">
        Submit
      </Button>
      </div>
      </div>
    </Form>
    </div>
    </Forms>

   
    )
}
export default AddNews;

const Forms=styled.div`
  margin-top:100px;
  margin-bottom:100px;
.mb-3{
  width: 450px;
  margin-left: 200px;
 
}
.title{
    height:80px;
}

.main-form{
  margin-left: 300px;
  margin-top: 120px;
  width: 800px;
  background-color: lightblue;
}
.forms{
  border:2px solid blue;
 margin-left:100px;
 margin-right:100px;
 border-radius:20px;
}
.content{
  width:700px;
  height:200px;
}
.butt{
  margin-left:200px
}
.butonss{
  width: 300px;
}
.inerform{
  margin-top: 100px;
  margin-bottom:100px;
  margin-left: 150px;
  margin-right:200px
}
`