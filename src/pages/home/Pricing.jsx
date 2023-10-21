import { Link } from "react-router-dom"
import data from "../../programData"

export default function Pricing() {
  const programs = data.slice(0, 3)

  const programCards = programs.map(card => {
    const { id, img, name, experience, description, inPerson } = card
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
    <>
      <div className="pricing-title">
        <h4 className="section-statement">Pricing</h4>
        <h1>Choose your plan</h1>
        <hr className="center" />
      </div>
      {programCards}
    </>
  )
}

//  <div className="price-card-container">
//   <div className="price-card">
//     <h4 className="section-statement">Consultation</h4>
//     <span>starting at</span>
//     <h1>$125</h1>
//     <span>one time fee</span>
//     <p>1 hour skype meeting</p>
//     <p>6 week workout plan</p>
//     <p>Nutritional plan</p>
//     <p>Cardio Program</p>
//     <p>Stretch Program</p>
//     <p>Weekly Check-ins</p>
//     <button>Reserve time</button>
//   </div>

//   <div className="price-card">
//     <h4 className="section-statement">Online</h4>
//     <span>starting at</span>
//     <h1>$250</h1>
//     <span>/month</span>
//     <p>Consultation</p>
//     <p>Custom workouts</p>
//     <p>Nutritional plan</p>
//     <p>Cardio program</p>
//     <p>Stretch program</p>
//     <p>Weekly check ins</p>
//     <button>View all plans</button>
//   </div>

//   <div className="price-card">
//     <h4 className="section-statement">In Person</h4>
//     <span>starting at</span>
//     <h1>$960</h1>
//     <span>/month</span>
//     <p>Consultation</p>
//     <p>Custom workouts</p>
//     <p>Nutritional plan</p>
//     <p>Cardio program</p>
//     <p>Stretch program</p>
//     <p>Monthly Assessment</p>
//     <button>View all plans</button>
//   </div>
// </div>
