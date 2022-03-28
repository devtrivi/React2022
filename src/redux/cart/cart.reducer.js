import cartActionTypes from './cart.types'

const INITIAL_STATE = {
  hidden: true,
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden }

    default:
      return state
  }
}
