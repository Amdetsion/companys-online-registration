import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NewsPublics from './company/NewsPublics';
import PublicNavbar from './Navbars/PublicNavbar';
import Footer from './footer/Footer';

const PublicNewPage = () => {
    return <div>
         <PublicNavbar/>
<NewsPublics/>
<Footer/>
    </div>;
}



export default PublicNewPage;
