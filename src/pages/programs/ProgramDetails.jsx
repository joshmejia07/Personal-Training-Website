import data from "../../data"
import PersonalTraining from "./PersonalTraining"
import ProgramIcons from "./ProgramIcons"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { BsStarFill } from "react-icons/bs"
import { nanoid } from "nanoid"

export default function ProgramDetails({
  addItemToCart,
  updatedItem,
  setUpdatedItem,
}) {
  const params = useParams()
  const item = data.programs.find(item => item.id === parseInt(params.id))
  const { name, img, perks, price, description } = item

  return (
    <div>
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
          <p key={nanoid()}>+ {perk}</p>
        ))}
        <div className="pricing">
          <h2>${price}</h2>
          <h2 className="strikethrough-price">$120</h2>
        </div>

        <Link to="/cart">
          <button
            className="program-btn"
            onClick={() => addItemToCart(item, item.id)}
          >
            Get started
          </button>
        </Link>
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
        <PersonalTraining
          addItemToCart={addItemToCart}
          updatedItem={updatedItem}
          setUpdatedItem={setUpdatedItem}
        />
      </div>
    </div>
  )
}

