import React from 'react'
import { connect } from 'react-redux'

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions'
function CheckoutItem({ cartItem, clearItem, addItem, removeItem }) {
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <div
      className='checkout-item'
      style={{
        width: '100%',
        display: 'flex',
        minHeight: '100px',
        borderBottom: '1px solid darkgrey',
        padding: '15px 0',
        fontSize: '20px',
        alignItems: 'center',
      }}
    >
      {' '}
      <div
        className='image-container'
        style={{ width: '23%', paddingRight: '15px' }}
      >
        {' '}
        <img
          src={imageUrl}
          alt=''
          className='item'
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <span className='name' style={{ width: '23%' }}>
        {name}
      </span>
      <span className='quantity' style={{ width: '23%' }}>
        <div
          className='arrow'
          onClick={() => removeItem(cartItem)}
          style={{ cursor: 'pointer' }}
        >
          &#10094;
        </div>
        <span className='value' style={{ width: '23%' }}>
          {quantity}
        </span>
        <div
          className='arrow'
          onClick={() => addItem(cartItem)}
          style={{ cursor: 'pointer' }}
        >
          &#10095;
        </div>
      </span>
      <span className='price' style={{ width: '23%' }}>
        {price}
      </span>
      <div
        className='remove-button'
        style={{ paddingLeft: '12px', cursor: 'pointer' }}
        onClick={() => clearItem(cartItem)}
      >
        &#10005;
      </div>
    </div>
  )
}
//const mapStateToProps = (state) => ({})

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
})
export default connect(null, mapDispatchToProps)(CheckoutItem)
