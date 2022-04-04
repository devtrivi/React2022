import React from 'react'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.components'
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { connect } from 'react-redux'
function CartDropdown({ cartItems, dispatch }) {
console.log('cartitems in dropdown, ',cartItems)
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
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>
            Your cart is empty. Add some stuff
          </span>
        )}
      </div>
      <Link to='/checkout'>
        <CustomButton
          onClick={() => dispatch(toggleCartHidden())}
          style={{ marginTop: 'auto' }}
        >
          GO CHECKOUT
        </CustomButton>
      </Link>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  //  toggleCartHidden: toggleCartHidden,
})

//const mapDispatchToProps = {}
//connect if we dont use mDTProps passes it as prop to components so we can use one off actions without typing this unnecessarily longwinded expressiones
export default connect(mapStateToProps)(CartDropdown)
