import { Link } from "react-router-dom"

export default function Cart({ cartItems }) {
  const totalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)
    if (cartItems.length > 0) {
      return totalPrice.toFixed(2)
    } else return 0
  }

  const items = cartItems.map(item => {
    const { name, price, quantity, img, category, id } = item

    return (
      <div key={id}>
        <hr className="hr-cart" />
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
            <button className="cart-btn">-</button>
            <h4>{quantity}</h4>
            <button className="cart-btn">+</button>
          </div>
        </div>
        <hr className="hr-cart" />
      </div>
    )
  })

  const emptyCart = (
    <>
      <hr className="hr-cart" />
      <p className="empty-cart-message">Your cart is empty...</p>
      <div className="cart-shopping-links">
        <Link to="/programs">Shop Programs</Link>
        <Link to="/shop">Shop Products</Link>
      </div>
      <hr className="hr-cart" />
    </>
  )

  return (
    <div className="margin-top page-container">
      <h1>Shopping Cart</h1>
      <p className="cart-item-count">
        {cartItems.length > 0 ? cartItems.length : 0}
        {cartItems.length === 1 ? " Item" : " Items"}
      </p>
      {cartItems.length > 0 ? items : emptyCart}
      <p>Subtotal</p>
      <p>${totalPrice()}</p>
    </div>
  )
}
