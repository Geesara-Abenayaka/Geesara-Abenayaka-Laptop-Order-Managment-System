import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './Componenets/Pages/About.jsx'
import Contact from './Componenets/Contact/Contact.jsx'
import Login from './Componenets/Login/Login.jsx'
import SignUp from './Componenets/SignUp/SignUp.jsx'
import Cart from './Componenets/Cart/Cart.jsx'
import MainPage from './MainPage.jsx'
import Checkout from './Componenets/Checkout/Checkout.jsx'
import Changepwd from './Componenets/Changepwd/changepwd.jsx'


import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/changepwd",
    element: <Changepwd />,
  },
  


]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <MainPage/>
  </StrictMode>,
)
