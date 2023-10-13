import { useState } from "react"
// CSS
import "./App.css"

// Components
import Home from "./pages/home/Home"
import Programs from "./pages/programs/Programs"
import Shop from "./pages/shop/Shop"
import Layout from "./components/Layout"
import Product from "./pages/shop/Product"
import Cart from "./pages/Cart"

// Router
import { Route, Routes } from "react-router-dom"

function App() {
  const [cartItems, setCartItems] = useState([])
  const addItemToCart = item => {
    setCartItems([...cartItems, item])
  }

  console.log(cartItems)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="programs" element={<Programs />} />
        <Route path="shop" element={<Shop />} />
        <Route
          path="shop/:id"
          element={<Product addItemToCart={addItemToCart} />}
        />
        <Route path="cart" element={<Cart cartItems={cartItems} />} />
      </Route>
    </Routes>
  )
}

export default App
