import React from 'react'
import Footer from './footer/Footer'
import Navbar from './Navbars/BasicExample'
import AddNews from '../components/company/AddNews'
function AddNewsPage() {
    return (
        <div>
        <Navbar/>
        <AddNews/>
        <Footer/>
        </div>
    )
}

export default AddNewsPage