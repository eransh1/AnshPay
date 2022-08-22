import React ,{useState} from 'react'
import "./CSS/SalesTeam.css"

const SalesTeam = () => {

const[userData,setUserData]=useState({
  fName:"",
  lName:"",
  phone:"",
  email:"",
  address:"",
  message:""
})
let name,value;
const postUserData=(event)=>{
 name=event.target.name;
 value=event.target.value;
 setUserData({...userData,[name]:value})
};

// connect with firebase
const submitData = async (event) => {
  event.preventDefault();
  const { fName, lName, phone, email, address, message } = userData;

  if (fName && lName && phone && email && address && message) {
    const res = fetch(
      "https://anshpay-a7fd7-default-rtdb.firebaseio.com/userDataRecords.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fName,
          lName,
          phone,
          email,
          address,
          message,
        }),
      }
    );

    if (res) {
      setUserData({
        fName: "",
        lName: "",
        phone: "",
        email: "",
        address: "",
        message: "",
      });
      alert("Data Stored");
    } else {
      alert("Error plz fill the data again");
    }
  } else {
    alert("plz fill the data");
  }
};



  return (
    <>
<section className="container">
<div className='main-container-sales'>
<div className='row sales-main-row'>
<div className='col-12 col-lg-5 d-flex flex-column left-side-container'>
<h2>Connect With Our<br />Sales Team.</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eaque alias similique.</p>

<img className="sales-img" src="./images/hero1.jpg" alt="hero1-img" />
</div>
<div className='col-12 col-lg-7 right-side-container '>
<form action="" method="POST">
<div class="row">
<div class="col-12 col-lg-6 contact-input-feild">
<input onChange={postUserData} type="text" name="fName" id="" class="form-control" placeholder="First Name" value={userData.fName} />
</div>
<div class="col-12 col-lg-6 contact-input-feild">
<input onChange={postUserData} type="text" name="lName" id="" class="form-control" placeholder="Last Name" value={userData.lName} />
</div>
</div>

<div class="row">
<div class="col-12 col-lg-6 contact-input-feild">
<input onChange={postUserData} type="text" name="phone" id="" class="form-control" placeholder="Phone Number " value={userData.phone} />
</div>
<div class="col-12 col-lg-6 contact-input-feild">
<input onChange={postUserData} type="text" name="email" id="" class="form-control" placeholder="Email ID" value={userData.email} />
</div>
</div>

<div class="row">
<div class="col-12 contact-input-feild">
<input onChange={postUserData} type="text" name="address" id="" class="form-control" placeholder="Add Address" value={userData.address} />
</div>
</div>

<div class="row">
<div class="col-12 ">
<input onChange={postUserData} type="text" name="message" id="" class="form-control" placeholder="Enter Your Message" value={userData.message} />
</div>
</div>

<div class="form-check form-checkbox-style">
<input class="form-check-input" type="checkbox" id="flexCheckChecked" value="" />
<label class="label">I agree that the AnshPay may contact me at the email address or phone number above</label>
</div>

<button onClick={submitData} type="submit" class="btn btn-style w-100">Submit</button>

</form>
</div>
</div>
</div>
</section>
    </>
  )
}

export default  SalesTeam