import React from 'react'

const CarIcon = (props) => {
  return (
    <a href='#'>
      <i onClick={props.clickHandler} className='fas fa-shopping-cart text-white'></i>
    </a>
  )
}

export default CarIcon
