import React from 'react'
import './Card.css'
import validator from "validator"



export default function Card() {


    function validateEmail(e) {

        const email = e.target.value

        if(!validator.isEmail(email)) {
            alert("mail not valid")
        }
    }

  return (
    <div className="container">
        <h2>Level Up Your Frontend Skills</h2>
        <p>Sign up for our free newsletter to receive weekly 
          coding challenges that will help you improve your 
          frontend development skills</p>
          <div>
            <input type="email" placeholder='Enter your email address' onChange={validateEmail} />
            <button>Subscribe</button>
          </div>
          <div className='last-side'>
            <input type="checkbox" />
            <p>By checking this box, you agree to receive our weekly newsletter containing coding challenges,
                tips, and other related content. You may unsubscribe from the newsletter at any time</p>
          </div>
    </div>
  )
}
