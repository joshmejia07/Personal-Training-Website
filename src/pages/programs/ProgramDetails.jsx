import data from "../../programData"
import ProgramIcons from "./ProgramIcons"
import { useParams, NavLink } from "react-router-dom"
import { BsStarFill } from "react-icons/bs"
import squat from "../../assets/images/in-person-training.jpg"
import { useState } from "react"

export default function ProgramDetails() {
  const params = useParams()
  const item = data.find(item => item.id === parseInt(params.id))
  const { name, img, perks, price, description } = item

  const [activeButton, setActiveButton] = useState("button1")

  const handleButtonClick = buttonName => {
    setActiveButton(buttonName)
  }

  return (
    <div className="margin-top">
      <img src={img} className="program-img" alt={name} />

      <div className="container">
        <div className="program-title">
          <h1 className="program-name">{name}</h1>
          <p className="text-colored">Online</p>
        </div>
        <div className="reviews">
          <BsStarFill className="star-big" />
          <BsStarFill className="star-big" />
          <BsStarFill className="star-big" />
          <BsStarFill className="star-big" />
          <BsStarFill className="star-big" />{" "}
          <span className="review-count">1547 reviews</span>
        </div>
        {perks.map(perk => (
          <p>+ {perk}</p>
        ))}
        <div className="pricing">
          <h2>${price}</h2>
          <h2 className="strikethrough-price">$120</h2>
        </div>

        <button className="program-btn">Get started</button>
        <ProgramIcons name={name} />

        <div className="description-box">
          <p>{description}</p>
        </div>

        <div className="in-person-heading">
          <h2>
            Supercharge your results with{" "}
            <span className="text-colored">in person</span> training
          </h2>
        </div>

        <div className="personal-training-section">
          <img src={squat} className="section-img" />
          <h1>Personal training</h1>
          <h4>Frequency / month</h4>
          <div className="training-price-btn">
            <button
              className={
                activeButton === "button1" ? "btn-active" : "price-btn"
              }
              onClick={() => handleButtonClick("button1")}
            >
              x 8
            </button>
            <button
              className={
                activeButton === "button2" ? "btn-active" : "price-btn"
              }
              onClick={() => handleButtonClick("button2")}
            >
              x 12
            </button>
            <button
              className={
                activeButton === "button3" ? "btn-active" : "price-btn"
              }
              onClick={() => handleButtonClick("button3")}
            >
              x 16
            </button>
          </div>
          <p>+ Free consultation</p>
          <p>+ Personalized workouts</p>
          <p>+ Progress tracking</p>
          <p>+ Nutritional coaching</p>
          <p>+ Strength training</p>
          <p>+ In person stretch and recovery</p>

          <div className="pricing">
            <h2>$960</h2>
            <h2 className="strikethrough-price">$1,120</h2>
          </div>
          <p className="text-colored">/month</p>
          <button className="program-btn">Get started</button>
        </div>
      </div>
    </div>
  )
}
