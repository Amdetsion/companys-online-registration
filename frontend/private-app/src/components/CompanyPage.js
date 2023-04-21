import React from 'react'
import Footer from './footer/Footer'
import Navbar from './Navbars/AdminNavbar'
import Companys from './company/Companys'
function CompanyPage() {
    return (
        <div>
        <Navbar/>
        <Companys/>
        <Footer/>
        </div>
    )
}

export default CompanyPage