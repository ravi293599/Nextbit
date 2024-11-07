import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import BottomTopBtn from './Components/BottomTopBtn'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import Home from './Pages/Home'
import Product from './Pages/Product'

function App() { 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
    <BottomTopBtn />
    </>
  )
}

export default App
