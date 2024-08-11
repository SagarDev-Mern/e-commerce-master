import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

  const productList = useSelector(state => state.cartData)
  console.log(productList)

  return (
    <div>
      <h1>Cart</h1>
      <div className='table'>
      {productList.map((product) =>
        <div className='table-data' key={product.id}>
          <img style={{height: '200px'}} src={product.photo} alt="" />
          <div className='table-data-details'>
            <h5>Product Name : {product.name}</h5>
            <p>Price : {product.price}</p>
            <p>Color : {product.color}</p>
            <p>Type : {product.type}</p>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Cart
