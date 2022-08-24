import React from 'react'
import "./CSS/RegistrationForm.css"
import img from "./images/img1.png"
import { NavLink } from "react-router-dom";

const RegistrationForm = () => {
  return (
  <>

<section className='main-container-signup'>
<div className='container reg-container'>
<div className='row'>
<div className='col-6 left-column '>

<form action="" method='POST'>
    <input type="text" name='userName' className='input input-top' placeholder='Username'  /><br />
    <input type="text" name='email' className='input' placeholder='Email' /><br />
    <input type="text" name='password' className='input' placeholder='Password' /><br />
    <input type="text" name='repassword' className='input' placeholder='Repeat Password' /><br />
    <div className='btn-a'>
    <button className='btn w-30 btn-lg button'>REGISTER</button>
<NavLink className='anchor' to="/login">I am already a member</NavLink>
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

export default RegistrationForm