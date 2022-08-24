import React from 'react'
import "./CSS/RegistrationForm.css"
import img from "./images/img1.png"

const RegistrationForm = () => {
  return (
  <>

<section className='main-container'>
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
<a className='anchor' href="">I am already a member</a>
</div>
</form>
</div>
<div className='col-6 right-column' >
<img className='img1' src={img} alt="img1" />
</div>
</div>
</div>
</section>

    </>
  )
}

export default RegistrationForm