import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'

//redux persist boilerplate
const persistConfig = {
  //at what point in reducer do you want to start storing
  key: 'root',
  //where do we store the key?\
  storage,
  //which elements do we want to store?
  whitelist: ['cart'],
} //user is stored in firebase auth so we only need cart for now

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
})

export default persistReducer(persistConfig, rootReducer)
