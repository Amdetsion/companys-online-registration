import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PublicNavbar from './Navbars/PublicNavbar'
import Login from './company/Login'
import Footer from './footer/Footer'
const LoginPage = () => {
    return <div>
        <PublicNavbar/>
        <Login/>
        <Footer/>
    </div>;
}



export default LoginPage;