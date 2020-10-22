import React, { useState, useEffect } from 'react'
import Card from '../molecules/Card'
import axios from 'axios'

const CarouselProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get('https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json')
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        {products.map((product) => (
          <Card
            key={product.title}
            imageProduct={product.image}
            titleProduct={product.title}
            priceProduct={product.price_real}
            contentProduct={product.net_content}
            sellosProduct={product.sellos}
          />
        ))}
      </div>
    </div>
  )
}

export default CarouselProducts
