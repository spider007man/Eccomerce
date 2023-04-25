import React from 'react'
import "./Modal.css"
import TextField from '@mui/material/TextField';
import { useState } from 'react';


const accountValue = {
  login : {
     view :"login",
    heading:"Login",
    subHeading:"Get access to your Orders, Wishlist and Recommendations"
},
  signup : {
    view : "signup",
    heading:"Looks like you're new here!",
    subHeading:"Sign up with your mobile number to get started"
  }
}


const Login = ({Modal}) => {
  const[createAccout,setCreateAccout] = useState (accountValue.login)

  const togolSignup = () =>{
    setCreateAccout (accountValue.signup)
  }
  return (
    <>
    <div className='click-here' onClick={Modal}></div>
    <nav>
      
    <div className='text-form'>
      <div className='login-text'>
      <h2>{createAccout.heading}</h2>
      <p className='spantag'>{createAccout.subHeading}</p>
    <img className='icon3' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"  />
      </div>
      { 
      createAccout.view === "login" ?

    <div className='moblie-no'>
    <TextField style={{width:340}} id="standard-basic" label="Enter Email/Mobile number" variant="standard" />
      {/* <input className='m98' type="text"placeholder='Enter Email/Mobile number' /> */}
      <p className='moblie-text'>By continuing, you agree to Flipkart's 
        <a href="/pages/terms">Terms of Use</a> 
        and <a href=" /pages/privacy policy">Privacy <br/>Policy</a>
      </p>
      <button className='otpbutton'>Request OTP</button>
      <p onClick={()=>togolSignup()} className='create-link'>New to Flipkart? Create an account</p>
    </div>
 :
 <div className='moblie-no'>
 <TextField style={{width:340}} id="standard-basic" label="Enter Mobile number" variant="standard" />
   <p className='moblie-text'>By continuing, you agree to Flipkart's 
     <a href="/pages/terms">Terms of Use</a> 
     and <a href=" /pages/privacy policy">Privacy <br/>Policy</a>
   </p>
   <button className='otpbutton'>CONTINUE</button>
   <a href="http://www.google.com">
   <button className='userlog'>Existing User? Log in</button>

   </a>
 </div>
 }
    </div>
    </nav>
    </>
  )
}

export default Login 