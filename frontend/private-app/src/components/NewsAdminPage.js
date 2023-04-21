import React from 'react';
import PublicNavbar from './Navbars/PublicNavbar';
import BackgroundImage from './homepagecomponenet/BackgroundImage';
import NewsAdminss from '../components/company/NewsAdminss';
import Footer from './footer/Footer';
import styled from 'styled-components';

import Carousels from './company/Carousals';
import News from './company/News';
const NewsAdminPage = () => {
    return <div>
        <HHH>
        <PublicNavbar/>
        <NewsAdminss/>
        <Footer/>
        
        </HHH>
    </div>;
}




export default NewsAdminPage;

const HHH=styled.div`
margin-left:0px;
margin-right:0px;

`