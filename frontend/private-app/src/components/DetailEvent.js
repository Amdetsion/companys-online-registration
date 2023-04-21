import React, { useState,useEffect } from "react";
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
  
  const DetailEvent = () => {
    const [inputs, setInputs] = useState();
    const id = useParams().id;
    
    const history = useNavigate();
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:5000/events/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.event));
      };
      fetchHandler();
    }, [id]);
  
    const sendRequest = async () => {
      await axios
        .put(`http://localhost:5000/events/${id}`, {
          companyName: String(inputs.companyName),
          content: String(inputs.content),
          date: Number(inputs.date),
        
        })
        .then((res) => res.data);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest().then(() => history("/admsamp"));
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
           <Forms onSubmit={handleSubmit}>
           <Form className='main-form'>
    
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Company Name</Form.Label>
       <Form.Control type="text" placeholder="Enter email" value={inputs.companyName}name="companyName"onChange={handleChange}/>
      
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Content</Form.Label>
       <Form.Control type="text" placeholder="Enter email" value={inputs. content}name=" content" onChange={handleChange} />
       
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Date</Form.Label>
       <Form.Control type="text" placeholder="Enter email" value={inputs. date} name=" date" onChange={handleChange} />
      
     </Form.Group>
     
     
      
     
     <Button variant="primary" type="submit">
       Submit
     </Button>
   </Form>
   
   </Forms>
        )}
      </div>
    );
  };
  
  export default DetailEvent;
  
  const Forms=styled.div`
.mb-3{
  width: 450px;
  margin-left: 200px;
}

.main-form{
  margin-left: 300px;
  margin-top: 120px;
  width: 800px;
  background-color: lightblue;
}

`