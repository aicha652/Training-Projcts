import React, { useState } from 'react';
import axios from 'axios'
import "./App.css"

function App() {
  
  const [data, setData] = useState({})
  const [location, setLocation] =useState("")

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location},uk&APPID=d41ad370afa18d87db4dd3a08785231d`

  const searchLocation = event => {
    if(event.key === "Enter") {
      axios.get(url).then((response) =>{
        setData(response.data)
      }).catch((error) => {
        alert(error.response.data.message)
      })
    }
  }
  

  return (
    <div className="container">
      <input
      value={location}
      onChange={event => setLocation(event.target.value)}
      onKeyPress={searchLocation}
      type="text" placeholder='Enter Location' />
      <div className='top'>
        <div className='location'>
          <p>{data.name}</p>
        </div>
        <div className='temp'>{data.main? data.main.temp : null}°F</div>
        <div className='description'>
          <p>{data.weather? data.weather[0].main : null}</p>
        </div>
      </div>
      <div className='bottom'>
        <div className='feels'>
          <p className='bold'>{data.main? data.main.feels_like : null}°F</p>
          <p>Feels Like</p>
        </div>
        <div className='humidity'>
          <p className='bold'>{data.main? data.main.humidity : null}%</p>
          <p>Humidity</p>
        </div>
        <div className='wind'>
          <p className='bold'>{data.wind ? data.wind.speed : null}MPH</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
}

export default App;
