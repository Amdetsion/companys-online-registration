import React from 'react';
import styled from 'styled-components';
import  logos from '../../img/logos.jpg'
import Button from 'react-bootstrap/Button';
const BackgroundImage = () => {
    return <Back>
       <div className='Holder'>
      
       </div>

    </Back>;
}



export default BackgroundImage;


const Back=styled.div`
margin-top:20px;
  .Holder{
    background-image: url("LASTSS-01.jpg");
    background-repeat: no-repeat;
    width: 1350px;
    height: 450px;
  }
  .texts{
    padding-top:150px;
    padding-left:400px;
    font-size: 50px;
    color:black;
  }
  .butt-link{
    margin-top: 200px;
    margin-left: 600px;
    width: 200px;
    height: 60px;
  }

`