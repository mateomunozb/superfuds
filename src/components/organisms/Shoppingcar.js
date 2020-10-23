import React, { useEffect, useState } from 'react'
import './Shoppingcar.css'
import ReturnShop from '../atoms/Returnshop'
import CarItems from '../organisms/Caritems'

const ShoppingCar = (props) => {
  const [clickIn, setclickIn] = useState(false)
  console.log('TLC: NavBar -> click', clickIn)

  const outPutClickEvent = () => setclickIn(true)

  useEffect(() => {
    if (clickIn) {
      props.onChange(clickIn)
    }
  })

  return (
    <div className='shoppingcar container'>
      <ReturnShop clickEvent={outPutClickEvent} />
      <h1>Carrito de compras</h1>
      <CarItems />
    </div>
  )
}

export default ShoppingCar
