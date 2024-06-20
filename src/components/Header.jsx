import React from 'react'

const Header = ({title}) => {
  return (
    <div >
        <h4 className='title'>{title}</h4>
        <h3 className='subtitle'>Your destiny is written on the starts</h3>
    </div>
  )
}

export default Header