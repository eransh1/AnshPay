import React from 'react'
import "./CSS/Footer.css"
import footerData,{followData} from "./api/footerapi"

const Footer = () => {
  return (
    <>
    <footer>
    <section className='container main-footer-container'>
<div className='row'>
<div className='col-12 col-lg-10 mx-auto'>
<div className='row footer-row'>
{footerData.map((event)=>{
return(<>
  <div className='col-sm-4 col-lg-3'>
<h2 className='footer-h2'>{event.heading}</h2>
<ul className='intro'>
<li><a className='footer-a' href="#">{event.intro1}</a></li>
<li><a className='footer-a' href="#">{event.intro2}</a></li>
<li><a className='footer-a' href="#">{event.intro3}</a></li>
<li><a className='footer-a' href="#">{event.intro4}</a></li>
</ul>
</div>
</>);
})}
<div className='col-sm-3 col-lg-3'>
<h2 className='footer-h2'>Follow Us</h2>
<div className='row'>
{followData.map((item)=>{
  return(<>
    <div className='col-sm-3'>
  <a href={item.href}>
<i class={item.logo}></i>
</a>
</div>
  </>);
})}
</div>
</div>
</div>
<p className='footer-p'>Copyright @ 2022 AnshPay. All rights reserved.</p>
</div>
</div>
    </section>
    </footer>
    </>
  )
}

export default Footer