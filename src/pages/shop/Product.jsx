import { useState } from "react"
import { useParams } from "react-router-dom"
import data from "../../data"
import { Link } from "react-router-dom"

export default function Product({ addItemToCart }) {
  const params = useParams()
  const item = data.find(item => item.id === parseInt(params.id))

  const [cartItem, setCartItem] = useState(item)

  function incrementCount() {
    const updatedItem = { ...item, quantity: cartItem.quantity + 1 }
    setCartItem(updatedItem)
  }

  function decrementCount() {
    const updatedItem =
      cartItem.quantity >= 2
        ? {
            ...item,
            quantity: cartItem.quantity - 1,
          }
        : item
    setCartItem(updatedItem)
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
          <button className="quant-btn" onClick={decrementCount}>
            -
          </button>
          <span className="count">{cartItem.quantity}</span>
          <button className="quant-btn" onClick={incrementCount}>
            +
          </button>
        </div>
      </div>
      <button className="add-cart-btn" onClick={() => addItemToCart(cartItem)}>
        Add to cart
      </button>
      <p style={{ fontWeight: "bold" }}>Description</p>
      <p>{item.description}</p>
    </div>
  )
}
