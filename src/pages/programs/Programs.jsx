import "../../programs.css"
import { NavLink } from "react-router-dom"
import data from "../../programData"

export default function Programs() {
  const card = data.map(program => {
    const { id, img, name, inPerson, experience, description } = program
    return (
      <div key={id} className="card">
        <div className="img-container">
          <img src={img} className="card-img" alt={name} />
          <h1 className="text-overlay">{name}</h1>
        </div>
        <div className="card-info">
          <div className="fitness-level">
            <p>{experience}</p>
            <div className="location">
              {inPerson && <p>In person</p>}
              <p>Online</p>
            </div>
          </div>
          <h3>Features</h3>
          <hr className="left" />
          <p>{description}</p>
          <button className="program-btn">Learn more</button>
        </div>
      </div>
    )
  })
  return (
    <div className="container">
      <h4 className="section-statement">Change starts here</h4>
      <h1>Programs</h1>
      <hr className="left" />
      <p>
        Welcome to our signature programs. Carefully designed to accommodate all
        fitness levels and backgrounds. Transform your life with confidence by
        choosing the program that is right for you.
      </p>
      <div className="program-card">{card}</div>
    </div>
  )
}

{
  /* <div
          className="card-img"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
          }}
        ></div> */
}
