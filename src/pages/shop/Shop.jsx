// import data from "../../data.js"
import data from "../../data.js"
import "../../shop.css"
import { Link, NavLink, useSearchParams } from "react-router-dom"
import { BsStarFill } from "react-icons/bs"

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("category")

  const displayedProducts = typeFilter
    ? data.products.filter(item => item.category.toLowerCase() === typeFilter)
    : data.products

  const products = displayedProducts.map(product => {
    const { brand, img, id, price, name } = product
    return (
      <div key={id} className="product-container">
        <Link to={`/shop/${id}`}>
          <img src={img} alt={name} className="shop-img" />
          <div className="product-info">
            <h4>{name}</h4>
            <p>{brand}</p>
            <h4>${price}</h4>
            <BsStarFill className="star" />
            <BsStarFill className="star" />
            <BsStarFill className="star" />
            <BsStarFill className="star" />
            <BsStarFill className="star" />
          </div>
        </Link>
      </div>
    )
  })
  return (
    <div>
      <div className="shop-hero">
        <h1>Products</h1>
        <hr className="center" />
      </div>

      <div className="category-filter-container">
        <NavLink
          className={`nav-filter-link ${!typeFilter ? "active-link" : ""}`}
          to=""
        >
          All
        </NavLink>
        <NavLink
          className={`nav-filter-link ${
            typeFilter === "supplements" ? "active-link" : ""
          }`}
          to="?category=supplements"
        >
          Supplements
        </NavLink>
        <NavLink
          className={`nav-filter-link ${
            typeFilter === "equipment" ? "active-link" : ""
          }`}
          to="?category=equipment"
        >
          Equipment
        </NavLink>
        <NavLink
          className={`nav-filter-link ${
            typeFilter === "recovery" ? "active-link" : ""
          }`}
          to="?category=recovery"
        >
          Recovery
        </NavLink>
      </div>

      <div className="page-container">
        <div className="shop-grid">{products}</div>
      </div>
    </div>
  )
}
