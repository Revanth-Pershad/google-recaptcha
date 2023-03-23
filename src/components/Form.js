import React, { useState } from 'react'
import './formstyles.css'
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
    const [isVerified, setVerified] = useState(false);
    function onChange(value) {
        console.log("Captcha value:", value);
        setVerified(true);
      }

      const submitHandler = (e) => {
        e.preventDefault();
        console.log("Form submitted")
      }

  return (
    <form onSubmit={(e) => (submitHandler(e))} id="myForm">

        <label htmlFor="Id">Id</label>
        <input type="number" id="Id" name="Id" autoComplete="off"/><br/>

        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" autoComplete="off"/><br/>

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" autoComplete="off"/><br/>

        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" autoComplete="off"/><br/>

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password"/><br/>

{/* This is a global key and can be used anywhere */}
        <ReCAPTCHA
    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
    onChange={onChange}
  />

    
        <button disabled={!isVerified} id="submit" type="submit">Submit</button>
    </form>
  )
}

export default Form