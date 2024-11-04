import React from 'react'
import "./BlogCard.css"
import photo from "./download.png"
import profile from "./profile.jpg"

export default function BlogCard({subject, title, text, fullname, hour}) {
  return (
    <div class="container">
        <img src={ photo } alt="img" />
        <div className='subject'>
            <h3>{subject}</h3>
        </div>
        <div className='title'>
            <h3>{title}</h3>
        </div>
        <div className='text'>
            <p>{text}</p>
        </div>
        <div className='profile'>
            <img src={ profile } alt="prof" />
            <div className='information'>
                <h3>{ fullname }</h3>
                <p>{ hour }</p>
            </div>
        </div>
    </div>
  )
}
