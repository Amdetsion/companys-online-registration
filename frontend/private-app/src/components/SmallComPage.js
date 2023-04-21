import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PublicNavbar from './Navbars/PublicNavbar'
import SmallCompanys from './company/SmallCompanys'
import Footer from './footer/Footer'
const SmallComPage = () => {
    return <div>
        <PublicNavbar/>
        <SmallCompanys/>
        <Footer/>
    </div>;
}

export default SmallComPage