import { useState } from "react"
import { Link } from "react-router-dom"
import { IoMenuOutline } from "react-icons/io5"
import { AiOutlineShopping, AiOutlineClose } from "react-icons/ai"

export default function Header({ calcCartItems }) {
  const [toggle, setToggle] = useState(false)

  const showMenu = () => setToggle(prev => !prev)

  function NavMenu() {
    return (
      <div className={toggle ? "menu active" : "menu"}>
        <AiOutlineClose className="close-btn" onClick={showMenu} />
        <div className="menu-el">
          <Link to="/" className="nav-links" onClick={showMenu}>
            Home
          </Link>
          <Link to="/programs" className="nav-links" onClick={showMenu}>
            Programs
          </Link>
          <Link to="/shop" className="nav-links" onClick={showMenu}>
            Shop
          </Link>
          <Link to="#contact" className="nav-links" onClick={showMenu}>
            Contact
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <header>
        <Link
          to="/"
          className="site-logo"
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          JXM
        </Link>
        <Link to="cart">
          <div className="shop-btn-relative">
            <AiOutlineShopping className="shop-btn" />
            <div className="shopping-cart-item-count">
              <span>{calcCartItems()}</span>
            </div>
          </div>
        </Link>
        <Link to="#">
          <IoMenuOutline className="menu-btn" onClick={showMenu} />
        </Link>
      </header>
      <NavMenu />
    </>
  )
}
