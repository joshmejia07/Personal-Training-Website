import data from "../../data"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { BsFillCheckCircleFill } from "react-icons/bs"

export default function Product({
  addItemToCart,
  incrementCount,
  decrementCount,
  updatedItem,
  setUpdatedItem,
}) {
  const [isAdded, setIsAdded] = useState(false)
  const params = useParams()
  const item = data.products.find(item => item.id === parseInt(params.id))

  useEffect(() => {
    setUpdatedItem(item)
  }, [])

  function itemAdded() {
    setIsAdded(true)
    setTimeout(() => {
      setIsAdded(false)
    }, 3000)
  }

  return (
    <div className="page-container margin-top">
      <Link to="/shop" className="shop-link">
        Back to shop
      </Link>
      <img src={item.img} className="product-page-img" />
      <h1>{item.productName}</h1>
      <h4>{item.brand}</h4>
      <span>{item.category}</span>
      <p>${item.price}</p>
      <div className="quantity-box">
        <span>Quantity</span>
        <div>
          <button
            className="quant-btn"
            onClick={() => decrementCount(updatedItem)}
          >
            -
          </button>
          <span className="count">{updatedItem.quantity}</span>
          <button
            className="quant-btn"
            onClick={() => incrementCount(updatedItem)}
          >
            +
          </button>
        </div>
      </div>
      {isAdded ? (
        <div className="item-added-message">
          <BsFillCheckCircleFill />
          <h4>Added to your cart</h4>
        </div>
      ) : (
        <button
          className="add-cart-btn"
          onClick={() => {
            addItemToCart(updatedItem, updatedItem.id), itemAdded()
          }}
        >
          Add to cart
        </button>
      )}

      <p style={{ fontWeight: "bold" }}>Description</p>
      <p>{item.description}</p>
    </div>
  )
}
