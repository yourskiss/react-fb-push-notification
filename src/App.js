import {  BrowserRouter as Router,  Routes,  Route } from "react-router-dom";
import Header from "./navigation/header";
import Footer from "./navigation/footer";

import Home from "./components/home/index";
import About from "./components/about/index";
import Contact from "./components/contact/index";
import Service from "./components/service/index";
import { useEffect } from "react";

import { genrateToken, messageRecieved } from './firebaseConfig';
 


function App() {


useEffect(() =>{
  genrateToken();
  messageRecieved();
},[]);


  

  return (
    <div className="mainwrapper">
      <div className="appwrapper">
        <Router>
          <Header />
          <div className="appcontainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
