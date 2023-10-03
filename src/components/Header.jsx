import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
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
          <NavLink to="/" className="nav-links" onClick={showMenu}>
            Home
          </NavLink>
          <NavLink to="/programs" className="nav-links" onClick={showMenu}>
            Programs
          </NavLink>
          <NavLink to="/shop" className="nav-links" onClick={showMenu}>
            Shop
          </NavLink>
          <NavLink to="" className="nav-links" onClick={showMenu}>
            Contact
          </NavLink>
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
