import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { IoMenuOutline } from "react-icons/io5"
import { AiOutlineShopping, AiOutlineClose } from "react-icons/ai"
import Logo from "../assets/momntm-logo.png"

export default function Header({ calcCartItems }) {
  const [toggle, setToggle] = useState(false)

  const useWindowSize = () => {
    const [windowWidth, setWindowWidth] = useState({ width: window.innerWidth })

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth({
          width: window.innerWidth,
        })
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowWidth
  }

  const screenWidth = useWindowSize()

  const showMenu = () => setToggle(prev => !prev)

  const NavMenu = () => {
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
          <img src={Logo} alt="Momntm Logo" />
        </Link>

        {screenWidth.width > 768 ? (
          <>
            <Link to="/" className="text-white">
              Home
            </Link>
            <Link to="/programs" className="text-white">
              Programs
            </Link>
            <Link to="/shop" className="text-white">
              Shop
            </Link>
          </>
        ) : null}

        <Link to="cart">
          <div className="shop-btn-relative">
            <AiOutlineShopping className="shop-btn" />
            <div className="shopping-cart-item-count">
              <span>{calcCartItems()}</span>
            </div>
          </div>
        </Link>

        {screenWidth.width <= 768 ? (
          <Link to="#">
            <IoMenuOutline className="menu-btn" onClick={showMenu} />
          </Link>
        ) : null}
      </header>
      <NavMenu />
    </>
  )
}
