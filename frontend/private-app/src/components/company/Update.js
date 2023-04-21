
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Update = (props) => {
    const history = useNavigate();
    const { _id, companyName,date, content  } = props.update;
    const deleteHandler = async () => {
      await axios
        .delete(`http://localhost:5000/updates/${_id}`)
        .then((res) => res.data)
        .then(() => history("/"))
        .then(() => history("/usersss"));
    };
  
    return (
      <Companylist>
        
      <div className="eventholder">
       
        <div className="one-holder">
        <h3 className="companyname">{companyName}</h3>
        
        <h5 className="content">{content}</h5>
        <h5 className="date">date:-{date}</h5>
        </div>
        
      
        <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }} className="button">
          Delete
        </Button>
        </div>
     
     
     
      </ Companylist>
    );
}

export default Update;

const Companylist=styled.div`
.eventholder{
  border:0px solid black;
  margin-left: 0px;
  margin-right: 0px;
  width:1000px;
  margin-top: 50px;
  border-radius: 20px;
  background-color:#f9f8e3;
}
       .companyname{
            margin-left: 400px;
            margin-top:60px;
           padding-top:40px
}
.content{
  margin-left: 50px;
  padding-top:30px
}
.date{
  margin-left:800px
}
.button{
  margin-left: 300px;
  margin-top:40px
}
`