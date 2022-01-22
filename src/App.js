import React from 'react';
import './App.css';
import { Routes, Router, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
/* a problem with props (and react) is well illustrated by the history prop. if i want to change it in my menu comp, i will have to make a prop chain from here till there. this is called prop tunneling and as you imagine it does not scale well. */


function App() {
  return (
    <div>
      <Header />
      <Routes> <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
