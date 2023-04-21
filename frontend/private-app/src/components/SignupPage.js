import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PublicNavbar from './Navbars/PublicNavbar'
import Signup from './company/Sinup'
import Footer from './footer/Footer'

const SignupPage = () => {
    return <div>
         <PublicNavbar/>
        <Signup/>
        <Footer/>
    </div>;
}



export default SignupPage;