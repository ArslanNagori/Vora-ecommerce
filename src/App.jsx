import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Login from './pages/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Toaster } from "react-hot-toast";



const App = () => {
  return ( 
    <div>
      <BrowserRouter>
      <Navbar />
      <Toaster position='top-right'/>

      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/products' element={ <Products />} />
        
        <Route path='/cart' element={ <Cart />} />
        <Route path='/wishlist' element={ <Wishlist />} />
        <Route path='/login' element={ <Login />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App