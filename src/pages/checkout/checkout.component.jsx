import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors'
function CheckoutPage({ cartItems, total }) {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <z className='header-blocks'>
          <span>Product</span>
        </z>{' '}
        <z className='header-blocks'>
          <span>Description</span>
        </z>{' '}
        <z className='header-blocks'>
          <span>Quantity</span>
        </z>{' '}
        <z className='header-blocks'>
          <span>Price</span>
        </z>{' '}
        <z className='header-blocks'>
          <span>Remove</span>
        </z>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>
        <span>TOTAL: {total}</span>
      </div>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})

const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)
