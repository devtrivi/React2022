import React from 'react'
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div
    className='cart-item'
    style={{
      width: '100%',
      display: 'flex',
      height: '80px',
      marginBottom: '15px',
    }}
  >
    <img src={imageUrl} alt={name} style={{ width: '30%' }} set='' />
    <div
      className='item-details'
      style={{
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '10px 20px',
      }}
    >
      <span className='name' style={{ fontSize: '16px' }}>
        {name}
      </span>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </div>
  </div>
)
export default CartItem
