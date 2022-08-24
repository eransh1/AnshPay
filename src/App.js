import React from "react";
import Home from "./pages/Home";
import {Routes,Route} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Error from "./pages/Error";
import Signup from "./pages/Signup"
import Log_in from "./pages/Log_in"
import Loader from "./Loader"
function App(){

  return (
    <>
    <Loader />
    <Routes >
    <Route path="/AnshPay" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="*" element={<Error />}/>
    <Route path="/services" element={<Services />}/>
    <Route path="/signup" element={<Signup />}/>
    <Route path="/login" element={<Log_in />}/>
   </Routes>
    </>
  )
}

export default App;

