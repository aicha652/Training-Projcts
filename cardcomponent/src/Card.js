import React from 'react'
import './Card.css'
import validator from "validator"



export default function Card() {

    let email = ""
    function handleEmail(e) {
        email = e.target.value
    }

    function validateEmail(email) {


        if(!validator.isEmail(email)) {
            alert("mail not valid")
            return false
        }
        return true
    }


    function subscribe() {
        if (validateEmail(email)) {
            alert("successful!")
        }
        else {
            alert("Enter a valid email")
        }
    }
    

  return (
    <div className="container">
        <h2>Level Up Your Frontend Skills</h2>
        <p>Sign up for our free newsletter to receive weekly 
          coding challenges that will help you improve your 
          frontend development skills</p>
          <div>
            <input type="email" placeholder='Enter your email address' onChange={handleEmail}/>
            <button onClick={subscribe}>Subscribe</button>
          </div>
          <div className='last-side'>
            <input type="checkbox"/>
            <p>By checking this box, you agree to receive our weekly newsletter containing coding challenges,
                tips, and other related content. You may unsubscribe from the newsletter at any time</p>
          </div>
    </div>
  )
}
