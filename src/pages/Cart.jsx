import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Cart({
  cartItems,
  increaseQty,
  decreaseQty,
  calcCartItems,
}) {
  const [totalPrice, setTotalPrice] = useState(0)

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)
  }

  const updateTotalPrice = () => {
    setTotalPrice(calculateTotalPrice())
  }

  useEffect(() => {
    setTotalPrice(calculateTotalPrice())
  }, [])

  const items = cartItems.map(item => {
    const { name, price, img, category, id } = item

    return (
      <div key={id}>
        <div className="cart-item">
          <div>
            <img src={img} className="cart-item-img" />
          </div>
          <div className="cart-item-info">
            <h4>{name}</h4>
            <span>{category}</span>
            <h3>${price}</h3>
          </div>
          <div className="cart-btn-container">
            <button
              className="cart-quantity-btn"
              onClick={() => {
                decreaseQty(item, item.id)
                updateTotalPrice()
              }}
            >
              -
            </button>
            <h4>{item.quantity}</h4>
            <button
              className="cart-quantity-btn"
              onClick={() => {
                increaseQty(item.id)
                updateTotalPrice()
              }}
            >
              +
            </button>
          </div>
        </div>
        <hr className="hr-cart" />
      </div>
    )
  })

  const checkout = (
    <>
      <div className="cart-subtotal-container">
        <p className="subtotal-text">Subtotal</p>
        <p className="total-price-text">${totalPrice.toFixed(2)}</p>
      </div>
      <button className="checkout-btn">Checkout</button>
    </>
  )

  const emptyCart = (
    <>
      <p className="empty-cart-message">Your cart is empty...</p>
      <hr className="hr-cart" />
    </>
  )

  return (
    <div className="margin-top page-container">
      <h1>Shopping Cart</h1>
      <p className="cart-item-count">Your Cart {`(${calcCartItems()})`}</p>
      <hr className="hr-cart" />
      {cartItems.length > 0 ? items : emptyCart}
      {cartItems.length > 0 && checkout}
      <div className="cart-shopping-links">
        <Link to="/programs">
          <button className="cart-shop-btn">Shop Programs</button>
        </Link>
        <Link to="/shop">
          <button className="cart-shop-btn">Shop Products</button>
        </Link>
      </div>
    </div>
  )
}
