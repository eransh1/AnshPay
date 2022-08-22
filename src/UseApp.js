import React from 'react'
import "./CSS/UseApp.css"
import appData from "./api/howToUseApp"
import supportData from "./api/support"
import img4 from "./images/hero3.jpg"
import img5 from "./images/callcenter.jpg"


const UseApp = () => {
  return (
    <>
        <section className='container-useApp'>
            <div className='container main-container'>
<div className='row main-row'>
<div className='col-12 col-lg-5 d-flex justify-content-center align-items-center'>
<img className='img' src={img4} alt="" />
</div>
<div className='col-12 col-lg-7 column  '>
<h3 className="col-h3">AVAILABLE ON GOOGLE AND IOS APP STORE ONLY</h3>
<h1 className='col-h1'>How to use the App?</h1>
{appData.map((event)=>{
    return(<>
        <div className='row app-row' key={event.id}>
<div className='col-12 col-lg-1 '>
<p className='col-id'>{event.id}</p>
</div>
<div className='col-12 col-lg-9'>
<h2 className='col-h2'>{event.heading}</h2>
<p className='col-p'>{event.para}</p>
</div>
</div>
    </>);
})}

<button className='btn button'>Learn More</button>

</div>

</div>
            </div>
        </section>

     
     
        {/*                       CUSTOMER SERVICES  sECTION                       */}


<section>
<div className='container main-container'>
<div className='row main-row service-row'>
<div className='col-12 col-lg-7 column-services  '>
<h3 className="col-h3">SUPPORT IN ANY LANGUAGES</h3>
<h1 className='col-h1'>World class support is<br />
available 24/7</h1>
{supportData.map((event)=>{
    return(<>
        <div className='row app-row ' key={event.id}>
<div className='col-12 col-lg-1 '>
<p className='col-id'>{event.id}</p>
</div>
<div className='col-12 col-lg-9'>
<h2 className='col-h2'>{event.heading}</h2>
<p className='col-p'>{event.para}</p>
</div>
</div>
    </>);
})}

<button className='btn button'>Learn More</button>

</div>
<div className='col-12 col-lg-4 d-flex justify-content-center align-items-center'>
<img className='img img-section' src={img5} alt="" />
</div>
</div>

</div>
</section>


    </>
  )
}

export default UseApp