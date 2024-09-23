import React, { useState } from "react"
import Header from "./components/Header"
import { Outlet } from 'react-router-dom'
import Footer from "./components/Footer"
import {CartContext, CartProvider, useCart} from "./Context/Cartcontext"

function App() {
  const [carts,setCarts] = useState([])

  const addCart=(cart)=>{
    setCarts((prev)=>[...prev,cart])
  }
  const updateCart=(id,cart)=>{
    setCarts((prev)=>prev.map((ct)=> ct.id===id ? cart : ct))
  }
  const deleteCart=(id)=>{
    setCarts((prev)=>prev.filter((ct)=> ct.id!=id))
  }

  return (
    <CartProvider value={{carts,addCart,updateCart,deleteCart}}>
      <Header/>
      <Outlet/>
      <Footer/>
    </CartProvider>
  )
}

export default App
