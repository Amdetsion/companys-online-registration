import React from 'react';
import ReactDOM from 'react-dom/client';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const CarousalEvent = (props) => {
  const {logo } = props.company;
  const slideData = [
    {
        logo
    },
  
  
]
const deleteHandler = async () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <div className='container'>
            <Slider {...settings}>
            {slideData.map(item => (
                <div className='card'>
                <div className='cardTitle'>
                     <img src={item.logo} className="logo" alt="kk" />
                </div>
               
            </div>
            ))}
            </Slider>
        </div>
    );
}

}
export default CarousalEvent