import React from 'react'
import Footer from './footer/Footer'
import Navbar from './Navbars/AdminNavbar'
import CompanyDetail from './company/CompanyDetail'
function CompanyDetailpage() {
    return (
        <div>
        <Navbar/>
        <CompanyDetail/>
        <Footer/>
        </div>
    )
}

export default CompanyDetailpage