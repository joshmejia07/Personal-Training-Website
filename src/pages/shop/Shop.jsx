import productData from "../../data.js"
import "../../shop.css"
import { Link, NavLink } from "react-router-dom"
import { BsStarFill } from "react-icons/bs"

export default function Shop() {
  const products = productData.map(product => {
    const { brand, category, description, img, id, price, productName } =
      product

    return (
      <div key={id} className="product-container">
        <Link to={`/shop/${id}`}>
          <img src={img} alt={productName} className="shop-img" />
          <div className="product-info">
            <h4>{productName}</h4>
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
    <>
      <div className="shop-hero">
        <h1>Build Better</h1>
        <h1>Recover Faster</h1>
      </div>
      <h4>Take your training to the next level</h4>
      <div className="page-container">
        <div className="shop-grid">{products}</div>
      </div>
    </>
  )
}
