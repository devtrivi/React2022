import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import Z from '../../components/z/z.component'
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors'
function CheckoutPage({ cartItems, total }) {
  return (
    <div
      className='checkout-page'
      style={{
        width: '55%',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '50px auto 0',
      }}
    >
      <div
        className='checkout-header'
        style={{
          width: '100%',
          padding: '10px 0',
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '1px solid darkgrey',
        }}
      >
        <Z
          className='header-blocks'
          style={{ textTransform: 'capitalize', width: '23%' }}
        >
          <span>Product</span>
        </Z>{' '}
        <Z
          className='header-blocks'
          style={{ textTransform: 'capitalize', width: '23%' }}
        >
          <span>Description</span>
        </Z>{' '}
        <Z
          className='header-blocks'
          style={{ textTransform: 'capitalize', width: '23%' }}
        >
          <span>Quantity</span>
        </Z>{' '}
        <Z
          className='header-blocks'
          style={{ textTransform: 'capitalize', width: '23%' }}
        >
          <span>Price</span>
        </Z>{' '}
        <Z
          className='header-blocks'
          style={{ textTransform: 'capitalize', width: '23%' }}
        >
          <span>Remove</span>
        </Z>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div
        className='total'
        style={{ marginTop: '30px', marginLeft: 'auto', fontSize: '36px' }}
      >
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
