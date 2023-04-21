
import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Home from "./components/Home";
import AddCompany from "./components/AddCompany";
import Companys from "./components/company/Companys";
import About from "./components/About";
import CompanyDetail from "./components/company/CompanyDetail";
import DetailComp from "./components/company/DetailComp";
import Contact from "./components/Contact";
import Login from "./components/company/Login"
import Sinup from "./components/company/Sinup"
import Welcome from "./components/company/Welcome"
import User from "./components/company/User"
import { useSelector } from "react-redux";
import BasicExample from "./components/Navbars/BasicExample";
import SmallCompanys from "./components/company/SmallCompanys";
import Events from "./components/company/Events";
import Try from "./components/Try";
import AddEvent from "./components/AddEvent";
import DetailEvent from "./components/DetailEvent"
import Updates from "./components/company/Updates";
import AddUpdate from "./components/AddUpdate";
import Contents from "./components/company/Contents";
import AddContent from "./components/AddContent";
import DetailContent from "./components/DetailContent";
import Admlogin from "./components/AdmLoginPage";
import Admsignup from "./components/company/Admsignup";
import Publicview from "./components/Publicview";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import PubEven from "./components/PubEven";
import WelcomeUser from "./components/WelcomeUser";
import AddComppage from "./components/AddComppage";
import AddEvepage from "./components/AddEvepage";
import AddUpdatePage from "./components/AddUpdatePage";
import WelcomeAdminPage from "./components/WelcomeAdminPage";
import CompanyDetailpage from "./components/CompanyDetailpage";
import EventsPage from "./components/EventsPage";
import UpdatesPage from "./components/UpdatesPage";
import ContentPage from "./components/ContentPage";
import DetailContentPage from "./components/DetailContentPage";
import AddContentPage from "./components/AddContentPage";
import CompanyPage from "./components/CompanyPage";
import SmallComPage from "./components/SmallComPage";
import WelcomeUserSample from "./components/WelcomeUserSample";
import PrivateRoutes from "./components/PrivateRoutes";
import NewsAdminPage from "./components/NewsAdminPage";
import AddNews from "./components/company/AddNews";
import AddNewsPage from "./components/AddNewsPage";
import NewsDetail from "./components/company/NewsDetail";
import NewsCompanyDetail from "./components/NewsCompanyDetail";
import PublicNewsPage from "./components/PublicNewsPage";
import AboutPage from "./components/AboutPage";
import WelcomeAdminPageSample from "./components/WelcomeAdminPageSample";
import AdmSignupPage from "./components/AdmSignupPage";
function App() {
  const {useid}=useParams()
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <React.Fragment>
    <div className="App">
      <header className="App-header">

      </header>
      <main>
      <Routes>
          <Route path="/" element={<Home />} exact />

          
          <Route path="/companys" element={<CompanyPage />} exact />
          
        
          <Route path="/companys/:id" element={<CompanyDetailpage />} exact /> 
          <Route path="/views" element={<SmallComPage />} exact />
          <Route path="/viewss/:id" element={<DetailComp />} exact />
          <Route path="/viewss" element={<DetailComp />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="/signup" element={< SignupPage />} exact />
          <Route path="/eventss" element={<  PubEven />} exact />
          <Route path="/events" element={< EventsPage />} exact />
          <Route path="/events/:id" element={< DetailEvent />} exact />
          <Route path="/try" element={< Try />} exact /> 
          
          <Route path="/update" element={< UpdatesPage />} exact /> 
          <Route path="/addupd" element={< AddUpdatePage />} exact /> 
          <Route path="/content" element={< ContentPage />} exact /> 
          <Route path="/addcont" element={< AddContentPage />} exact /> 
          <Route path="/content/:id" element={< DetailContentPage />} exact /> 
          <Route path="/admlogin" element={< Admlogin />} exact /> 
          <Route path="/comview" element={< Publicview />} exact /> 
          <Route path="/admsignup" element={< AdmSignupPage />} exact /> 
          {isLoggedIn && <Route path="/admins" element={< WelcomeAdminPage />} / > }
          {isLoggedIn && <Route path="/user" element={<WelcomeUser />} exact/> }
          <Route path="/id" element={<AddComppage />} exact/> 
          <Route path="/user/:idea" element={< AddEvepage />} exact /> 
          
           <Route element={<PrivateRoutes />}>
   <Route path="/user/upd" element={< AddUpdatePage />} exact /> 
   </Route>
   <Route path="/login" element={< LoginPage />} exact />
   <Route path="/newsadmins" element={<NewsAdminPage/>} exact />   
   <Route path="/addnews" element={<AddNewsPage/>} exact /> 
   <Route path="/newsadmins/:id" element={<NewsCompanyDetail/>} exact /> 
   <Route path="/pubnew" element={<PublicNewsPage/>} exact /> 
   <Route path="/about" element={<AboutPage/>} exact /> 
   <Route path="/usersss" element={<WelcomeUserSample/>} exact /> 
   <Route path="/admsamp" element={<WelcomeAdminPageSample/>} exact />
        </Routes>
        </main>
    </div>
    </React.Fragment>
  );
  
}

export default App;
