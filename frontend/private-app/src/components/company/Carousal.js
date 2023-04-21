import Carousel from 'react-bootstrap/Carousel';
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import styled from "styled-components";



function Carousal(props) {
    const history = useNavigate( );
    const { carousalImageone, carousalImagetwo,carousalImagethree } = props.content;
    
  return (
    <Car>
    <Carousel className='carousalsss'>
      <Carousel.Item>
        <img
          className="d-block w-300 caro"
          src={carousalImageone}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-300 caro"
          src={carousalImagetwo}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-300 caro"
          src={carousalImagethree}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Car>
  );
}

export default Carousal;

const Car=styled.div`
margin-left:0px;
.caro{
    width: 1350px;
    height: 450px;
}
.carousalsss{
    margin-left:-3px;
}

`