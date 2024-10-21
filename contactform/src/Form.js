import React from 'react'
import validator from 'validator'
import "./Form.css"

export default function Form() {

  var email = ""
  var name = ""
  var subject = ""
  var message = ""

  function handleNameChange(e) {
    name = e.target.value
  }

  function handleEmailChange(e) {
    email = e.target.value
  }

  function handleSubjectChange(e) {
    subject = e.target.value
  }

  function handleMessageChange(e) {
    message = e.target.value
  }

  function validateEmail(email) {
    if(!validator.isEmail(email)){
      return false
    }
    return true
  }

  function validateForm(){
    if(name === "" || email === "" || subject === "" || message === "") {
      alert("all fields are required")
    }
    else if(validateEmail(email)) {
      alert("Success")
    }
    else {
      alert("Email no valid!")
    }
  }

  function handleFocus() {
    document.getElementById("fname").style.borderColor = "red"
  }

  return (
    <div className='container'>
      <form 
      onSubmit={(event) => {
        event.preventDefault()
        }}>
        <h3>Send me a message</h3>
        <p>Feel free to get in touch with me with anything related to CODINGSPACE or you can just say hi.
          i will get back to you as soon as i can.</p>
        <input type='text' placeholder="Name" onChange={handleNameChange} onFocus={handleFocus} id="fname"/>
        <input type='email' placeholder='Email address' onChange={handleEmailChange} />
        <input type='text' placeholder='Subject' onChange={handleSubjectChange} />
        <textarea placeholder='Message' onChange={handleMessageChange} ></textarea>
        <button type='submit' onClick={validateForm}>Send</button>
      </form>
    </div>
  )
}
