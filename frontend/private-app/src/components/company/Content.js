
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import styled from "styled-components";



const Content = (props) => {
    const history = useNavigate();
    const { _id, messageMinistry, messageDirector, phone,email,
        facebook, aboutus, imgmnister,imgdirector,carousalImageone, carousalImagetwo,
        carousalImagethree,newsImageone,newsImagetwo,newsImagethree,newsHeadlineOne,
        newsHeadlineTwo,newsHeadlineThree, } = props.content;
    const deleteHandler = async () => {
      await axios
        .delete(`http://localhost:5000/content/${_id}`)
        .then((res) => res.data)
        .then(() => history("/"))
        .then(() => history("/companies"));
    };
  
    return (
      <Companylist>
    
          
      <div className="cardss">
      <div className="cardsss">
        <div className="individual">
            <h4 className="middleheader">Messsage of the Ministry</h4>
            <h5 className="message" >{messageMinistry}</h5>
        </div>
        <div className="individual">
            <h4 className="middleheader">Image of the Ministr</h4>
            <img src={ imgmnister} className="imgs"/>
        </div>
        <div className="individual">
            <h4 className="middleheader">Messsage of the Directoret </h4>
            <h5 className="message" >{messageDirector}</h5>
        </div>
        <div className="individual">
            <h4 className="middleheader">Image of the Ministr</h4>
            <img src={ imgdirector} className="imgs"/>
        </div>
        <div className="individual">
            <h4 className="middleheader">Phone </h4>
            <h3 className="contact">{phone}</h3>
        </div>
        <div className="individual">
            <h4 className="middleheader">Contact Us Email Address </h4>
            <h3 className="contact">{email}</h3>
        </div>
        <div className="individual">
            <h4 className="middleheader">Contact Us Facebook Address </h4>
            <h3 className="contact">{facebook}</h3>
        </div>
        <div className="individual">
            <h4 className="middleheader">About us Page </h4>
            <h5 className="message">{aboutus}</h5>
        </div>
        <div className="individual">
            <h4 className="middleheader">Carousal one</h4>
            <img src={carousalImageone} className="imgs" alt="images"/>
        </div>
        <div className="individual"> 
            <h4 className="middleheader">Carousal two</h4>
            <img src={carousalImagetwo} className="imgs" alt="images"/>
        </div>
        <div className="individual">
            <h4 className="middleheader">Carousal three</h4>
            <img src={carousalImagethree} className="imgs" alt="images"/>
        </div>
        <div className="individual">
            <h4 className="middleheader">News Image One</h4>
            <img src={newsImageone} className="imgs" alt="images"/>
        </div>
        <div className="individual">
            <h4 className="middleheader">News Image Two</h4>
            <img src={newsImagetwo} className="imgs" alt="images"/>
        </div>
        <div className="individual">
            <h4 className="middleheader">News Image Three</h4>
            <img src={newsImagethree} className="imgs" alt="images"/>
        </div>
        <div className="individual">
            <h4 className="middleheader">News Headline One</h4>
            <h5 className="message" >{newsHeadlineOne}</h5>
        </div>
        <div className="individual">
            <h4 className="middleheader">News Headline Two</h4>
            <h5 className="message" >{newsHeadlineTwo}</h5>
        </div>
        <div className="individual">
            <h4 className="middleheader">News Headline Three</h4>
            <h5 className="message" >{newsHeadlineThree}</h5>
        </div>
        
        <div className="buttons">
        <Button LinkComponent={Link} href={`/content/${_id}`} sx={{ mt: "auto" } } className="buttonone">
          Update
        </Button>
        <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }} className="buttontwo">
          Delete
        </Button>
        </div>
        </div>
      </div>
    
      </ Companylist>
    );
}

export default Content;

const Companylist=styled.div`
margin-top: 100px;
    .col{
      display:flex;
      flex-direction: column;
    }
    .cardss{
      border:2px solid black;
      padding-top:50px;
      padding-bottom:50px;
      border-radius:20px;
      width:100%;
      margin-left:80px;

    }
    .card{
      height: 960px;
      width: 350px;

      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
   .logo{
    height: 300px;
    width: 345px;
   }
 .button{
  height: 40px;
    width: 200px;
    margin-top:50px;
 }
 .partner-phone{
  margin-left: 40px;
 }
 .one{
  color: blue;
  margin-top: 40px;
 }
 .one-holder{
  border-bottom: 2px solid blue;
  margin-top: 20px;
 
 }
 .two{
    color: #145DA0;
  }
  .two-holder{
    border-bottom: 2px solid #145DA0;
    margin-top: 30px;
    margin-bottom: 40px;
  }
  .web-contact{
    margin-left: 40px;
  }
  .three-holder{
    border-bottom: 2px solid blue;
  margin-top: 20px;
  }
  .Branch-classfi{
    margin-left: 40px;
  }
  .three{
    color: #145DA0;
  }
  .buttons{
    margin-left: 350px;
   
margin-top:50px;
  }
  .message{
    margin-left: 100px;
    margin-right:100px;
    margin-top:50px;
    border:2px solid blue;
    border-radius:20px;
    padding-top:50px;
    padding-bottom:50px;
    padding-left:60px;
    padding-right:60px;
    width:750px;
  }
  .imgs{
    margin-left:200px;
    margin-top:50px;
    width:400px;
    height:250px;
  }
  .contact{
    margin-left:70px;
    border:2px solid blue;
    padding-left:20px;
    padding-right:20px;
    padding-top:20px;
    padding-bottom:20px;
    width:400px;
    height:80px;
    border-radius:20px;
  }
  .middleheader{
    margin-left: 35px;;
  }
  .buttontwo{
   
  }
`