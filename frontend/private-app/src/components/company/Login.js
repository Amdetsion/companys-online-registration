import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  
  const dispatch = useDispatch();
    const history = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  }); 
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/companies/login", {
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // send http requestz
    sendRequest()
    .then(() => dispatch(authActions.login()))
      .then(() => history("/user"));
  };
    return <Logins>
        <Form onSubmit={handleSubmit} className='formss'>
            
         
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <h3 className='headerss'>LOGIN</h3>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  name="email"
            onChange={handleChange} value={inputs.email} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password"
            onChange={handleChange}
            value={inputs.password}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" className='btn'>
        Submit
      </Button>
    </Form>
    </Logins>;
}
export default Login;

const Logins=styled.div`
   margin-left:500px;
   margin-top: 100px;
   margin-bottom:100px;

.mb-3{
    width:350px;
    padding-left: 30px;
}
.header{
    background-color: blue;
    width: 400px;
}
.headerss{
    margin-left: 130px;
    color:blue;
    padding-top:50px;
}
.formss{
    border-left: 2px solid blue;
    border-right:  2px solid blue;
    border-bottom:4px solid blue;
    border-top:4px solid blue;
    width : 400px;
    height:400px;
    border-radius:20px;
    background-image:url("kanymr-01.jpg");
}
.btn{
    margin-left: 130px;
}

`