import React from 'react'

const HoroscopeItem = ({horoscope}) => {
  return (
    <div className="card">
    <img src={horoscope.image} alt={horoscope.title} />
    <h3>{horoscope.title}</h3>
    <h4>{horoscope.date}</h4>
  </div>
  )
}

export default HoroscopeItem