import React from 'react'
import "./CSS/Error404.css"
import {NavLink} from "react-router-dom"

const Error404 = () => {
  return (
    <>
      <section id="error">
        <div className='error'>
<div className='error404'>
<h1 className="error-h1">404</h1>
</div>
<h2 className='error-h2'>WE ARE SORRY, PAGE NOT FOUND!</h2>
<p className="error-p">THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED OR HAD ITS NAME CHANGED OR IS TEMPORARILY UNAVAILABLE.</p>
<NavLink aria-current="page"  class="active" to="/AnshPay">back to homepage</NavLink>
        </div>
      </section>
    </>
  )
}

export default Error404