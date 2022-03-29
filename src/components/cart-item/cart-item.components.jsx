import React from 'react'
const CartItem = ({ item: { imageurl, price, name, quantity } }) => (
  <div className='cart-item'>
    <img src={imageurl} alt={name} set='' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </div>
  </div>
)
export default CartItem
