import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ContactMaps from './contactComponent/ContactMaps';
import PublicNavbar from './Navbars/PublicNavbar';
import Footer from './footer/Footer';

const Contact = () => {
    return <div>

        <PublicNavbar/>
        <ContactMaps/>
        <Footer/>

    </div>;
}



export default Contact;