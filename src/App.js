import React from "react";
import Home from "./pages/Home";
import {Routes,Route} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Error from "./pages/Error";
function App(){

  return (
    <>
    <Routes >
    <Route path="/AnshPay" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="*" element={<Error />}/>
    <Route path="/services" element={<Services />}/>
   </Routes>
    </>
  )
}

export default App;

