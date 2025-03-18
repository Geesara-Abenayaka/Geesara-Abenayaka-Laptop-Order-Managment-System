import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router"

import App from './App.jsx'
import About from './Componenets/Pages/About.jsx'
import Contact from './Componenets/Contact/Contact.jsx'
import Login from './Componenets/Login/Login.jsx'
import SignUp from './Componenets/SignUp/SignUp.jsx'
import Cart from './Componenets/Cart/Cart.jsx'
import Checkout from './Componenets/Checkout/Checkout.jsx'
import Changepwd from './Componenets/Changepwd/changepwd.jsx'

import { useState } from 'react'

function MainPage() {





  const [cart, setCart] = useState({});

  const addToCart = (item_id) => {
    const currentCart = { ...cart };
    const next = currentCart[item_id] ? currentCart[item_id] + 1 : 1;
    currentCart[item_id] = next;
    setCart(currentCart)

  }
  const removeFromCart = (item_id) => {
    const currentCart = { ...cart };
    if (currentCart[item_id]) {
      currentCart[item_id] -= 1;
      if (currentCart[item_id] === 0) { delete currentCart[item_id]; }
    } setCart(currentCart);
  }
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App addToCart={addToCart} removeFromCart={removeFromCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/changepwd" element={<Changepwd />} />

      </Routes>
    </BrowserRouter>
  )
}

export default MainPage