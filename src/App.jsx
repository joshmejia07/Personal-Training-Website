// CSS
import "./App.css"

// Components
import Home from "./pages/home/Home"
import Programs from "./pages/programs/Programs"
import Shop from "./pages/shop/Shop"
import Layout from "./components/Layout"
import Product from "./pages/shop/Product"

// Router
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Product />} />
      </Route>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App

// Old routes code

{
  /* <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes> */
}
