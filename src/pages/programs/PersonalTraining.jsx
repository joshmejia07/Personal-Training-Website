import data from "../../data"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { nanoid } from "nanoid"

export default function PersonalTraining({
  addItemToCart,
  updatedItem,
  setUpdatedItem,
}) {
  const [activeButton, setActiveButton] = useState(0)

  const handleButtonClick = buttonName => {
    setActiveButton(buttonName)
  }

  useEffect(() => {
    setUpdatedItem({
      ...item,
      price: price[activeButton],
      id: id[activeButton],
      category: category[activeButton],
    })
  }, [activeButton])

  const item = data.personalTraining
  const { name, id, img, perks, price, strikePrice, category } = item

  return (
    <div className="personal-training-section">
      <img src={img} className="section-img" />
      <h1>{name}</h1>
      <h4>Frequency / month</h4>
      <div className="training-price-btn">
        <button
          className={activeButton === 0 ? "btn-active" : "price-btn"}
          onClick={() => handleButtonClick(0)}
        >
          x 8
        </button>
        <button
          className={activeButton === 1 ? "btn-active" : "price-btn"}
          onClick={() => handleButtonClick(1)}
        >
          x 12
        </button>
        <button
          className={activeButton === 2 ? "btn-active" : "price-btn"}
          onClick={() => handleButtonClick(2)}
        >
          x 16
        </button>
      </div>
      {perks.map(perk => (
        <p key={nanoid()}>+ {perk}</p>
      ))}
      <div className="pricing">
        <h2>${price[activeButton]}</h2>
        <h2 className="strikethrough-price">${strikePrice[activeButton]}</h2>
      </div>
      <p className="text-colored">/month</p>
      <Link to="/cart">
        <button
          className="program-btn"
          onClick={() => addItemToCart(updatedItem, updatedItem.id)}
        >
          Get started
        </button>
      </Link>
    </div>
  )
}
