import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './component/Pages/LandingPages/Landing'
import SignIn from './component/Pages/Auth/SignIn'
import Payment  from './component/Pages/Payment/Payment';
import Orders from './component/Pages/Orders/Orders'
import Cart from './component/Pages/Cart/Cart'


function Routing() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/auth' element={< SignIn/>} />
        <Route path='/payment' element={< Payment/>} />
        <Route path='/order' element={<Orders/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </Router>
  )
}

export default Routing