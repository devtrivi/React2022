import React from 'react'

function CheckoutItem({ cartItem: { name, imageUrl, price, quantity } }) {
  return (
    <div className='checkout-item'>
      {' '}
      <div className='image-container'>
        {' '}
        <img src={imageUrl} alt='' className='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{price}</span>
      <span className='price'>{quantity}</span>
      <div className='remove-button'>&#10005;</div>
    </div>
  )
}

export default CheckoutItem
