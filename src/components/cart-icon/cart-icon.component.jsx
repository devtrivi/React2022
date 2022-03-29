import React from 'react'
import { connect } from 'react-redux'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
function CartIcon({ toggleCartHidden, itemCount }) {
  return (
    <div
      className='cart-icon'
      onClick={toggleCartHidden}
      style={{
        width: '45px',
        height: '45px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      <ShoppingIcon
        className='shopping-icon'
        style={{ width: '24px', height: '24px' }}
      >
        <span
          className='item-count'
          style={{
            position: 'absolute',
            fontSize: '10px',
            fontWeight: 'bold',
            bottom: '12px',
          }}
        >
          {itemCount}
        </span>
      </ShoppingIcon>
    </div>
  )
}
const mapStateToProps = state => state => ({
  itemCount: selectCartItemsCount,
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
