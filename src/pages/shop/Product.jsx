import { useParams } from "react-router-dom"
import data from "../../data"
import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function Product({
  addItemToCart,
  incrementCount,
  decrementCount,
  updatedItem,
  setUpdatedItem,
}) {
  const params = useParams()
  const item = data.find(item => item.id === parseInt(params.id))

  useEffect(() => {
    setUpdatedItem(item)
  }, [])

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
      <button
        className="add-cart-btn"
        onClick={() => addItemToCart(updatedItem, updatedItem.id)}
      >
        Add to cart
      </button>
      <p style={{ fontWeight: "bold" }}>Description</p>
      <p>{item.description}</p>
    </div>
  )
}

// const [incrementCount, decrementCount, cartItem] = useCount(item)

//   return (
//     <div className="page-container margin-top">
//       <Link to="/shop" className="shop-link">
//         Back to shop
//       </Link>
//       <img src={item.img} className="product-page-img" />
//       <h1>{item.productName}</h1>
//       <h4>{item.brand}</h4>
//       <span>{item.category}</span>
//       <p>${item.price}</p>
//       <div className="quantity-box">
//         <span>Quantity</span>
//         <div>
//           <button className="quant-btn" onClick={decrementCount}>
//             -
//           </button>
//           <span className="count">{cartItem.quantity}</span>
//           <button className="quant-btn" onClick={incrementCount}>
//             +
//           </button>
//         </div>
//       </div>
//       <button className="add-cart-btn" onClick={() => addItemToCart(cartItem)}>
//         Add to cart
//       </button>
//       <p style={{ fontWeight: "bold" }}>Description</p>
//       <p>{item.description}</p>
//     </div>
//   )
// }
