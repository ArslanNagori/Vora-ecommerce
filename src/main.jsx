import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {WishlistProvider} from './context/WishlistProvider.jsx'
import { CartProvider } from './context/CartProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WishlistProvider >
      <CartProvider >

        <App />
        
      </CartProvider>
    </WishlistProvider>
  </StrictMode>,
)
