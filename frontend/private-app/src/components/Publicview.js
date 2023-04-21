import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SmallCompanys from './company/SmallCompanys';
import PublicNavbar from './Navbars/PublicNavbar';
import Footer from './footer/Footer';

const Publicview = () => {
    return <div>
         <PublicNavbar/>
<SmallCompanys/>
<Footer/>
    </div>;
}



export default Publicview;
