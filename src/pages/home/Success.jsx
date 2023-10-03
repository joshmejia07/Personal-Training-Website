import joshSuccess from "../../assets/images/josh-success.jpg"

export default function Success() {
  return (
    <section className="split-container">
      <h4 className="section-statement">Get Results</h4>
      <h1>Success Stories</h1>
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
      <img
        className="section-img"
        src={joshSuccess}
        alt="before and after picture"
      />
    </section>
  )
}
