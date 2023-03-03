import React from 'react'

const WeatherIcon = ({icon}) => {
  return <img src={`http://openweathermap.org/img/wn/${icon}@4x.png`}/>
}

export default WeatherIcon