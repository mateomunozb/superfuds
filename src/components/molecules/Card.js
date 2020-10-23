import React, { useState } from 'react'
import './Card.css'

const Card = (props) => {
  const { imageProduct, titleProduct, priceProduct, contentProduct, sellosProduct } = props

  const [isHovering, setIsHovering] = useState(false)
  // const [isHoveringBadge, setIsHoveringBadge] = useState(false)

  const handleMouseHover = () => setIsHovering(true)

  const toggleHoverState = () => setIsHovering(false)

  // const handleMouseHoverSellos = () => setIsHoveringBadge(true)
  // const toggleHoverStateSellos = () => setIsHoveringBadge(false)

  return (
    <div
      onMouseEnter={handleMouseHover}
      onMouseLeave={toggleHoverState}
      className='card cardstyle'
      style={{ width: '14rem' }}>
      <div className='container'>
        <img src={imageProduct} className='card-img-top principalimg' alt='...' />
        <ul className=' list-group list-group-horizontal justify-content-center '>
          {sellosProduct.map((sello) => (
            <li key={sello.name} className='list-group-item border-0 '>
              <img
                // onMouseEnter={handleMouseHoverSellos}
                // onMouseLeave={toggleHoverStateSellos}
                src={sello.image}
                alt='...'
              />
            </li>
          ))}
        </ul>
      </div>
      <div className='dropdown-divider'></div>
      <div className='container'>
        <div className='rowstyle row justify-content-between'>
          <h6 className='text-success'>SuperFüds</h6>
          <span className='bg-success rounded-pill text-white'>{contentProduct}</span>
        </div>
        <h6 className='card-text'>{titleProduct}</h6>
        <h4 className='card-title'>
          <span className='text-success font-weight-bold'>$</span>
          {Number(priceProduct) / 1000}
        </h4>
      </div>
      {isHovering && <div className='text-center bg-success'>Agregar a carrito</div>}
    </div>
  )
}

export default Card
