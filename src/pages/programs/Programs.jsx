import "../../programs.css"
import { Link } from "react-router-dom"
import data from "../../data"

export default function Programs() {
  const card = data.programs.map(program => {
    const { id, img, name, inPerson, experience, description } = program
    return (
      <div key={id} className="card">
        <div className="img-container">
          <img src={img} className="card-img" alt={name} />
          <h1 className="text-overlay">{name}</h1>
        </div>
        <div className="card-info">
          <div className="fitness-level">
            <div className="location">
              {inPerson && <p>In person</p>}
              <p>Online</p>
            </div>
            <p>{experience}</p>
          </div>
          <h3>Features</h3>
          <hr className="left" />
          <p className="card__preview-text">{description}</p>
          <Link to={`/programs/${id}`}>
            <button className="program-btn">Learn more</button>
          </Link>
        </div>
      </div>
    )
  })
  return (
    <div className="margin-top container">
      <h4 className="section-statement program-page-margin">
        Change starts here
      </h4>
      <h1>Programs</h1>
      <hr className="left" />
      <p>
        Welcome to our signature programs. Carefully designed to accommodate all
        fitness levels and backgrounds. Transform your life with confidence by
        choosing the program that is right for you.
      </p>
      <div className="card-grid">{card}</div>
    </div>
  )
}
