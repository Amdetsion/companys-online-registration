import React, { useState,useEffect } from "react";
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
  
  const  DetailContent = () => {
    const [inputs, setInputs] = useState();
    const id = useParams().id;
    
    const history = useNavigate();
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:5000/content/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.content));
      };
      fetchHandler();
    }, [id]);
  
    const sendRequest = async () => {
      await axios
        .put(`http://localhost:5000/content/${id}`, {
             
        messageMinistry:String(inputs.messageMinistry),
        messageDirector:String(inputs.messageDirector), 
        phone:Number(inputs.phone),
        email:String(inputs.email),
        facebook:String(inputs.facebook), 
        aboutus:String(inputs.aboutus), 
        imgmnister:String(inputs.imgmnister),
        imgdirector:String(inputs.imgdirector),
        carousalImageone:String(inputs.carousalImageone),
        carousalImagetwo:String(inputs.carousalImagetwo),
        carousalImagethree:String(inputs.carousalImagethree),
        newsImageone:String(inputs.newsImageone),
        newsImagetwo:String(inputs.newsImagetwo),
        newsImagethree:String(inputs.newsImagethree),
        newsHeadlineOne:String(inputs.newsHeadlineOne),
        newsHeadlineTwo:String(inputs.newsHeadlineTwo),
        newsHeadlineThree:String(inputs.newsHeadlineThree),
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
            <div className="forms">
           <Form  onSubmit={handleSubmit}>
               <div className="inerform">
           <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Message of the ministry</Form.Label>
        <Form.Control as="textarea" placeholder="Enter email" value={inputs.messageMinistry} name="messageMinistry"onChange={handleChange} rows={6} className="messageMinistry"/>
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image of The Ministry</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={inputs.imgmnister} name="imgmnister" onChange={handleChange} className="imgs" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Message of The Directoret</Form.Label>
        <Form.Control as="textarea" placeholder="Enter email" value={inputs.messageDirector} name="messageDirector" onChange={handleChange} className="messageMinistry" rows={6}  />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image of The Director</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={inputs.imgdirector} name="imgdirector" onChange={handleChange} className="imgs"  />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={inputs.phone} name="phone" onChange={handleChange} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={inputs.email} name="email" onChange={handleChange} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Facebook</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={inputs.facebook} name="facebook" onChange={handleChange} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>About US</Form.Label>
        <Form.Control as="textarea" placeholder="Enter email" value={inputs.aboutus} name="aboutus" onChange={handleChange} rows={6} className="messageMinistry"/>
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Carousal One</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={inputs.carousalImageone} name="carousalImageone" onChange={handleChange} className="imgs" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Carousal Two</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={inputs.carousalImagetwo} name="carousalImagetwo" onChange={handleChange} className="imgs" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Carousal Three</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={inputs.carousalImagethree} name="carousalImagethree" onChange={handleChange} className="imgs" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>news Image One</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={inputs.newsImageone} name="newsImageone" onChange={handleChange} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>news image two</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={inputs.newsImagetwo} name="newsImagetwo" onChange={handleChange} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>news image three</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={inputs.newsImagethree} name="newsImagethree" onChange={handleChange} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>news headline one</Form.Label>
        <Form.Control as="textarea" placeholder="Enter email" value={inputs.newsHeadlineOne} name="newsHeadlineOne" onChange={handleChange} rows={6} className="messageMinistry" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>news headline two</Form.Label>
        <Form.Control as="textarea" placeholder="Enter email" value={inputs.newsHeadlineTwo} name="newsHeadlineTwo" onChange={handleChange} rows={6} className="messageMinistry" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>news headline three</Form.Label>
        <Form.Control as="textarea" placeholder="Enter email" value={inputs.newsHeadlineThree} name="newsHeadlineThree" onChange={handleChange} rows={6} className="messageMinistry" />
       
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
        )}
      </div>
    );
  };
  
  export default DetailContent;
     
  const Forms=styled.div`
  margin-top:100px;
  margin-bottom:100px;
.mb-3{
  width: 450px;
  

}

.main-form{
  margin-left: 200px;
  margin-right: 400px;
  margin-top: 120px;
  width: 800px;
 
}
.messageMinistry{
 width: 700px;
}
.imgs{
  width:700px;
}
.forms{
  border:2px solid blue;
 margin-left:100px;
 margin-right:100px;
 border-radius:20px;
}
.inerform{
  margin-top: 100px;
  margin-bottom:100px;
  margin-left: 150px;
  margin-right:200px
}
.butt{
  margin-left:200px
}
.butonss{
  width: 300px;
}

`