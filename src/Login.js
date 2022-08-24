import React from 'react'
import "./CSS/Login.css"

const Login = () => {
  return (
    <>

<section className='main-container'>
<div className='container reg-container'>
<div className='row'>
<div className='col-6 left-column '>

<form action="" method='POST'>
    <input type="text" name='userName' className='input input-top' placeholder='Username'  /><br />
    <input type="text" name='password' className='input' placeholder='Password' /><br />
    <div className='btn-a'>
    <button className='btn w-30 btn-lg button'>Log In</button>
<a className='anchor' href="">Not a member, Register!</a>
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

export default Login