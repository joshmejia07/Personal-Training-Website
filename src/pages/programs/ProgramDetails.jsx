import data from "../../programData"
import ProgramIcons from "./ProgramIcons"
import { useParams } from "react-router-dom"
import { BsStarFill } from "react-icons/bs"

export default function ProgramDetails() {
  const params = useParams()
  const item = data.find(item => item.id === parseInt(params.id))
  const { name, img, perks, price } = item

  return (
    <div className="margin-top">
      <img src={img} className="program-img" alt={name} />
      <div className="page-container">
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
      </div>
    </div>
  )
}
