import React from 'react';
import PublicNavbar from './Navbars/PublicNavbar';
import BackgroundImage from './homepagecomponenet/BackgroundImage';
import Messages from './homepagecomponenet/Meesges';
import Footer from './footer/Footer';
import styled from 'styled-components';

import Carousels from './company/Carousals';
import News from './company/Newss';
import Countups from './company/CountUps'
const Home = () => {
    return <div>
        <HHH>
        <PublicNavbar/>
        <Carousels/>
        <Messages/>
        <News/>
        <Countups/>
        <Footer/>
      
        </HHH>
    </div>;
}




export default Home;

const HHH=styled.div`
margin-left:0px;
margin-right:0px;

`