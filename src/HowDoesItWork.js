import React from 'react'
import "./CSS/HowDoesItWork.css"
import dataApi from './api/workDataApi.js'




const HowDoesItWork = () => {


  return (
    <><section>
    <div className="container how-work-container">
    <h1>How Does It Work</h1>
    <div className='row'>
    {dataApi.map((item)=>{
        return(<>
    <div className=' col-12 col-lg-4 d-flex justify-content-center flex-column align-items-center how-work-card' key={item.id}>
    <i className={item.logo} work-logo></i>
    <h3 className='work-h3'>{item.heading}</h3>
    <p className='work-p'>{item.intro}</p>
    </div>   
        </>);
    })}
    </div>
    </div>
    </section>
    </>
  )
}

export default HowDoesItWork