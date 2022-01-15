import React from 'react';
import './App.css';
import { Routes, Router, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
/* a problem with props (and react) is well illustrated by the history prop. if i want to change it in my menu comp, i will have to make a prop chain from here till there. this is called prop tunneling and as you imagine it does not scale well. */

const HatsPage = () => (
  <div>
    <h1>PAGINA DE SOMBREROS</h1>
  </div>
)

function App() {
  return (
    <Routes> <Route  path='/' element={<HomePage/>}/>
    <Route path='/hats' element={<HatsPage/>}/>
    </Routes>
  );
}

export default App;
