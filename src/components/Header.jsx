import { useState } from "react"
import { Link } from "react-router-dom"
import { IoMenuOutline } from "react-icons/io5"
import { AiOutlineShopping, AiOutlineClose } from "react-icons/ai"

export default function Header() {
  const [toggle, setToggle] = useState(false)

  const showMenu = () => setToggle(prev => !prev)

  function NavMenu() {
    return (
      <div className={toggle ? "menu active" : "menu"}>
        <AiOutlineClose className="close-btn" onClick={showMenu} />
        <div className="menu-el">
          <Link className="nav-links">Home</Link>
          <Link className="nav-links">About</Link>
          <Link className="nav-links">Programs</Link>
          <Link className="nav-links">Shop</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <header>
        <Link to="/" className="site-logo">
          JXM
        </Link>
        <Link to="#">
          <AiOutlineShopping className="shop-btn" />
        </Link>
        <Link to="#">
          <IoMenuOutline className="menu-btn" onClick={showMenu} />
        </Link>
      </header>
      <NavMenu />
    </>
  )
}
