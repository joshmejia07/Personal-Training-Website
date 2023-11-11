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
            <h3 className="text-colored">Weight Loss</h3>
            <h2>{name}</h2>
            <div className="location">
              {inPerson && <p>In person</p>}
              <p>Online</p>
            </div>
            <p className="experience">{experience}</p>
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
      <div className="split">{programCards}</div>
    </div>
  )
}
