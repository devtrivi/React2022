import React from 'react';
import './App.css';
import { Routes, Router, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth } from './firebase/firebase.utils'
/* a problem with props (and react) is well illustrated by the history prop. if i want to change it in my menu comp, i will have to make a prop chain from here till there. this is called prop tunneling and as you imagine it does not scale well. */


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null

  componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged( user => { //this is good naming of methods
  this.setState ({ currentUser: user})
  console.log(user)
  })}
  componentWillUnmount(){this.unsubscribeFromAuth()}
  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Routes> <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signin' element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
}
}
export default App;
