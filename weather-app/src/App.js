import React, { useState } from 'react';
import axios from 'axios'
import "./App.css"

function App() {
  //const url = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d41ad370afa18d87db4dd3a08785231d"
  return (
    <div className="container">
      <input type="text" placeholder='Enter Location' />
      <div className='top'>
        <div className='location'>
          <p>Denver</p>
        </div>
        <div className='temp'>33°F</div>
        <div className='description'>
          <p>Clear</p>
        </div>
      </div>
      <div className='bottom'>
        <div className='feels'>
          <p className='bold'>30°F</p>
          <p>Feels Like</p>
        </div>
        <div className='humidity'>
          <p className='bold'>63%</p>
          <p>Humidity</p>
        </div>
        <div className='wind'>
          <p className='bold'>3 MPH</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
}

export default App;
