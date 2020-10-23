import React, { useState } from 'react'
import './App.css'
import NavBar from '../organisms/Navbar'
import CarouselProducts from '../organisms/Carousel'
import ShoppingCar from '../organisms/Shoppingcar'

function App() {
  const [clickListen, setClickListen] = useState(false)
  console.log('TLC: App -> clickListen', clickListen)

  const listenCLick = () => setClickListen(true)
  const listenCLickShop = () => setClickListen(false)

  return (
    <div>
      <NavBar onChange={listenCLick} />
      <CarouselProducts />
      {clickListen && <ShoppingCar onChange={listenCLickShop} />}
    </div>
  )
}

export default App
