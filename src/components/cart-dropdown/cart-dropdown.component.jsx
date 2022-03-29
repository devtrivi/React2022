import React from 'react'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.components'
import { connect } from 'react-redux'
function CartDropdown({ cartItems }) {
  return (
    <div
      className='cart-dropdown'
      style={{
        position: 'absolute',
        width: '240px',
        height: '340px',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        border: '1px solid black',
        backgroundColor: 'white',
        top: '90px',
        right: '40px',
        zIndex: 5,
      }}
    >
      <div
        className='cart-items'
        style={{
          height: '240px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'scroll',
        }}
      >
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton style={{ marginTop: 'auto' }}>GO CHECKOUT</CustomButton>
    </div>
  )
}
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
})

//const mapDispatchToProps = {}

export default connect(mapStateToProps)(CartDropdown)
