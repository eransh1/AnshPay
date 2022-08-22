import React from 'react'
import "./CSS/HowToSendMoney.css"
import sendMoneyData from "./api/sendMoneyApi"

const HowToSendMoney = () => {
  return (
    <>
<section className='container container-sendMoney'>
<div className='main'>
<h1>How to send money</h1>
<div className='row main-row'>
{sendMoneyData.map((item)=>{
    return(<>
<div className='col-12 col-lg-4 d-flex align-content-center flex-column main-col'>
<i className={item.logo}></i>
<h3>{item.heading}</h3>
<p>{item.para}</p>
</div>
    </>);
})}

</div>
</div>
    </section>
    </>
  )
}

export default HowToSendMoney