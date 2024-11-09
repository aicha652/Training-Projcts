import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to="/" className='links'>Home</Link>
      <Link to="/about" className='links'>About</Link>
      <Link to="/contact" className='links'>Contact</Link>
    </div>
  )
}
