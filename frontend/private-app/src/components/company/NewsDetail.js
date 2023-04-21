import React, { useState,useEffect } from "react";
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
  
  const NewsDetail = () => {
    const [inputs, setInputs] = useState();
    const id = useParams().id;
    
    const history = useNavigate();
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:5000/news/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.news));
      };
      fetchHandler();
    }, [id]);
  
    const sendRequest = async () => {
      await axios
        .put(`http://localhost:5000/news/${id}`, {
            newstitle: String(inputs.newstitle),
            newscontent: String(inputs.newscontent),
            date: Number(inputs.date),
        
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
           <Form onSubmit={handleSubmit} className='main-form'>
    <div >
     <Form.Group className="mb-3" controlId="formBasicEmail" >
       <Form.Label>News Title</Form.Label>
       <Form.Control type="text" placeholder="Enter email" value={inputs.newstitle}name="newstitle"onChange={handleChange} className="title"/>
      
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>News Content</Form.Label>
       <Form.Control as="textarea" placeholder="Enter email" value={inputs.newscontent}name="newscontent" onChange={handleChange} className="content" />
       
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Date</Form.Label>
       <Form.Control type="text" placeholder="Enter email" value={inputs.date} name="date" onChange={handleChange} className="title" />
      
     </Form.Group>
     
     
      
     <div className="buttons">
     <Button variant="primary" type="submit">
       Submit
     </Button>
     </div>
     </div>
   </Form>
   
   </Forms>
        )}
      </div>
    );
  };
  
  export default NewsDetail;
  
  const Forms=styled.div`
  margin-top:100px;
  margin-bottom:100px;
.mb-3{
  width: 450px;
  margin-left: 200px;
  margin-top:50px;
}

.main-form{
  margin-left: 300px;
  margin-top: 120px;
  width: 800px;
 border:2px solid blue;
 border-radius:20px;
}
.title{
    width:500px;
    border-radius: 10px;
    margin-bottom:20px;
    
}
.content{
    width:550px;
    height:250px;
}
.buttons{
    margin-left:400px;
}

`