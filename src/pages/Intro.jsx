import squatRack from "../assets/images/squat-rack.jpg"

export default function Intro() {
  return (
    <section className="split-container">
      <h4 className="section-statement">Your fitness journey</h4>
      <h1>Achieve Success</h1>
      <hr className="left" />
      <p className="opening-paragraph">
        In person training is perfect for those seeking to optimize their
        workouts, push their limits and realize their potential.
      </p>
      <p>
        Whether you are a complete beginner or seasoned gym enthusiast looking
        to sculpt, in person training will ensure that you are always moving in
        the right direction while providing you with support and accountability.
        Learn More
      </p>
      <img className="squat-rack-img" src={squatRack} alt="squat rack" />
    </section>
  )
}
