import React from 'react'
import "./CSS/Header.css"
import logo from "./images/hero1.jpg"

const Header = () => {
  return (
    <div>
    <header>
<section className='container header-container'>
<div className='row header-row'>
   <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start' >
<h1 className='display-2 header-h1'>Online Payment Made <br />
Easy For You.</h1>
<p className="header-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio officiis tempora recusandae voluptate quam, nisi odio officiis tempora recusandae</p>
<h3 className='header-h3'>Get early access for you</h3>
<div className='mt-3 capsule'>
<input className='rounded-pill w-90  w-lg-75 me-3 p-2 search' type="text" placeholder='Enter Your Email' />
<button className='btn button'>Get it now</button>
</div>
</div> 
<div className='col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center  header-images'>
<img className='img1' src={logo} alt="header-img" />
<img className='img2' src="./images/hero4.jpg" alt="header-img" />
</div>
</div>
</section>
</header>
    </div>
  );
}

export default Header