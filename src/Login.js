import React from 'react'
import "./CSS/Login.css"
import img from "./images/img1.png"
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>

<section className='main-container-login'>
<div className='container reg-container-login'>
<div className='row row-login'>
<div className='col-6 left-column '>

<form className='form-login' action="" >
    <input type="text" name='userName' className='input-login input-top-login' placeholder='Username'  /><br />
    <input type="text" name='password' className='input-login' placeholder='Password' /><br />
    <div className='btn-a'>
    <button className='btn w-30 btn-lg button'>Log In</button>
<NavLink className='anchor' to="/signup">Not a member, Register!</NavLink>
</div>
</form>
</div>
<div className='col-6 right-column' >
<img className='img11' src={img} alt="img1" />
</div>
</div>
</div>
</section>

    </>
  )
}

export default Login