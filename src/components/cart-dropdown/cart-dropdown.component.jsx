import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
function CartDropdown() {
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
        <CustomButton style={{ marginTop: 'auto' }}>GO CHECKOUT</CustomButton>
      </div>
    </div>
  )
}

export default CartDropdown
