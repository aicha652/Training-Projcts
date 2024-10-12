import React from 'react'
import "./Profile.css"
import profile from "./images.jpg"

export default function Profile({name, job, bio, followers, following, project}) {
  return (
    <div className='container'>
      <img src={ profile } alt="profile" />
      <div className='informations'>
        <h4>{ name }</h4>
        <p className='job'>{ job }</p>
        <p>{ bio }</p>
        <p className='numbres'>{ followers } Follwers | { following } Following | { project } Projects</p>
        <button className='FollowBtn'>Follow</button>
        <button className='ProfileBtn'> View Profile</button>
      </div>
    </div>
  )
}
