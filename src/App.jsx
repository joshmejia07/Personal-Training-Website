import { useState } from "react"

// Components
import Home from "./pages/home/Home"
import Programs from "./pages/programs/Programs"
import ProgramDetails from "./pages/programs/ProgramDetails"
import Shop from "./pages/shop/Shop"
import Layout from "./components/Layout"
import Product from "./pages/shop/Product"
import Cart from "./pages/Cart"

// Router
import { Route, Routes } from "react-router-dom"

function App() {
  const [cartItems, setCartItems] = useState([])
  const [updatedItem, setUpdatedItem] = useState({})

  const addItemToCart = (item, id) => {
    const itemIndex = cartItems.findIndex(i => i.id === id)
    if (itemIndex !== -1) {
      cartItems[itemIndex] = {
        ...cartItems[itemIndex],
        quantity: cartItems[itemIndex].quantity + updatedItem.quantity || 1,
      }
    } else setCartItems([...cartItems, item])
  }

  // modify quantity for objects that have not been pushed to cartItems

  function incrementCount(item) {
    const updatedItem = { ...item, quantity: item.quantity + 1 }
    setUpdatedItem(updatedItem)
  }

  function decrementCount(item) {
    const updatedItem =
      item.quantity >= 2
        ? {
            ...item,
            quantity: item.quantity - 1,
          }
        : item
    setUpdatedItem(updatedItem)
  }

  // modify quantity for objects in cart

  function increaseQty(id) {
    const itemIndex = cartItems.findIndex(i => i.id === id)
    cartItems[itemIndex] = {
      ...cartItems[itemIndex],
      quantity: cartItems[itemIndex].quantity + 1,
    }
  }

  function decreaseQty(item, id) {
    const itemIndex = cartItems.findIndex(i => i.id === id)
    if (item.quantity > 1) {
      cartItems[itemIndex] = {
        ...cartItems[itemIndex],
        quantity: cartItems[itemIndex].quantity - 1,
      }
    }
  }

  const calcCartItems = () => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity
    }, 0)
  }

  return (
    <Routes>
      <Route path="/" element={<Layout calcCartItems={calcCartItems} />}>
        <Route index element={<Home />} />
        <Route path="programs" element={<Programs />} />
        <Route
          path="programs/:id"
          element={
            <ProgramDetails
              addItemToCart={addItemToCart}
              updatedItem={updatedItem}
              setUpdatedItem={setUpdatedItem}
            />
          }
        />

        <Route path="shop" element={<Shop />} />
        <Route
          path="shop/:id"
          element={
            <Product
              updatedItem={updatedItem}
              addItemToCart={addItemToCart}
              incrementCount={incrementCount}
              decrementCount={decrementCount}
              setUpdatedItem={setUpdatedItem}
            />
          }
        />
        <Route
          path="cart"
          element={
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              calcCartItems={calcCartItems}
            />
          }
        />
      </Route>
    </Routes>
  )
}

export default App
