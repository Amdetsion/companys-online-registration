import React from 'react'
import Footer from './footer/Footer'
import Navbar from './Navbars/AdminNavbar'
import Contents from './company/Contents'
function ContentPage() {
    return (
        <div>
        <Navbar/>
        <Contents/>
        <Footer/>
        </div>
    )
}

export default ContentPage