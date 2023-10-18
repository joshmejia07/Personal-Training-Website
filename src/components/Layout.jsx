import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

export default function Layout({ calcCartItems }) {
  return (
    <div className="site-wrapper">
      <Header calcCartItems={calcCartItems} />
      <Outlet />
      <Footer />
    </div>
  )
}
