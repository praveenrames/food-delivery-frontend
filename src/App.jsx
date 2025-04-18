import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer.jsx';
import LoginPopup from './Components/LoginPopup/LoginPopup.jsx'
import Navbar from './Components/Navbar/Navbar.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Home from './pages/Home/Home.jsx';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx';
import Verify from './pages/verify/Verify.jsx';
import MyOrders from './pages/MyOrder/MyOrders.jsx';

const App = () => {
  // display popup for login
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/Order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;