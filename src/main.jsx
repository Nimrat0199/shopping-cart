import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='cart' element={<Cart />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
