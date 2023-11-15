import { Link } from "react-router-dom"
import data from "../../data"

export default function Pricing() {
  const programs = data.programs.slice(0, 3)

  const programCards = programs.map(card => {
    const { id, img, name, experience, description, inPerson, price } = card
    return (
      <div key={id} className="card">
        <div className="img-container">
          <img src={img} className="card-img" alt={name} />
          <h1 className="text-overlay">{name}</h1>
        </div>
        <div className="card-info">
          <div className="fitness-level">
            <h2>{name}</h2>
            <p className="text-colored">{experience}</p>
            <p className="card__preview-text">{description}</p>
            <div className="pricing">
              <h2>${price}</h2>
              <h2 className="strikethrough-price">$120</h2>
            </div>
          </div>
          <Link to={`/programs/${id}`}>
            <button className="program-btn">Learn more</button>
          </Link>
        </div>
      </div>
    )
  })

  return (
    <div className="container">
      <div className="pricing-title">
        <h4 className="section-statement">Pricing</h4>
        <h1>Choose your plan</h1>
        <hr className="center" />
      </div>
      <div className="card-grid">{programCards}</div>
    </div>
  )
}
