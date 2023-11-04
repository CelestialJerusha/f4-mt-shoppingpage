import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Cart from './Components/Cart'


const App = () =>{

  return(
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route exact path="/" Component={Home} />
      <Route path="/cart" Component={Cart} />
      </Routes>
  </BrowserRouter>
    </div>
  )
}


export default App

