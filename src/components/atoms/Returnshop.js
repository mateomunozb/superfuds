import React from 'react'
import './Returnshop.css'

const ReturnShop = (props) => {
  return (
    <a href='/'>
      <h5 onClick={props.clickEvent} className='returnshop'>
        <i className='fas fa-chevron-left text-success'> </i>
        Volver a la tienda
      </h5>
    </a>
  )
}

export default ReturnShop
