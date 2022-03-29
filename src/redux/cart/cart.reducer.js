import CartActionTypes from './cart.types'
import cartActionTypes from './cart.types'
import { addItemToCart } from './cart.utils'
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden }

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      }
    default:
      return state
  }
}
