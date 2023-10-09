// CSS
import "./App.css"

// Components
import Home from "./pages/home/Home"
import Programs from "./pages/programs/Programs"
import Shop from "./pages/shop/Shop"
import Layout from "./components/Layout"
import Product from "./pages/shop/Product"

// Router
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Product />} />
      </Route>
    </Routes>
  )
}

export default App
