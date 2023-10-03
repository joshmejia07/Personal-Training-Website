import { useState } from "react"
import { useParams } from "react-router-dom"
import data from "../../data"

export default function Product() {
  const [quantity, setQuantity] = useState(1)
  const params = useParams()
  const item = data.find(item => item.id === parseInt(params.id))

  function incrementCount() {
    setQuantity(prev => prev + 1)
  }

  function decrementCount() {
    setQuantity(prev => (prev >= 2 ? prev - 1 : (prev = 1)))
  }

  return (
    <div className="page-container">
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
          <span className="count">{quantity}</span>
          <button className="quant-btn" onClick={incrementCount}>
            +
          </button>
        </div>
      </div>
      <button className="add-cart-btn">Add to cart</button>
      <p style={{ fontWeight: "bold" }}>Description</p>
      <p>{item.description}</p>
    </div>
  )
}
