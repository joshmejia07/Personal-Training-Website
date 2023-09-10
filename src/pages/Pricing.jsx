export default function Pricing() {
  return (
    <>
      <div className="pricing-title">
        <h4 className="section-statement">Pricing</h4>
        <h1>Choose your plan</h1>
        <hr className="center" />
      </div>

      <div className="price-card-container">
        <div className="price-card">
          <h4 className="section-statement">Consultation</h4>
          <span>starting at</span>
          <h1>$125</h1>
          <span>one time fee</span>
          <p>1 hour skype meeting</p>
          <p>6 week workout plan</p>
          <p>Nutritional plan</p>
          <button>Reserve time</button>
        </div>

        <div className="price-card">
          <h4 className="section-statement">Online</h4>
          <span>starting at</span>
          <h1>$250</h1>
          <span>/month</span>
          <p>Consultation</p>
          <p>Custom workouts</p>
          <p>Nutritional plan</p>
          <p>Cardio program</p>
          <p>Stretch program</p>
          <p>Weekly check ins</p>
          <button>Reserve time</button>
        </div>

        <div className="price-card">
          <h4 className="section-statement">In Person</h4>
          <span>starting at</span>
          <h1>$960</h1>
          <span>/month</span>
          <p>Consultation</p>
          <p>Custom workouts</p>
          <p>Nutritional plan</p>
          <p>Cardio program</p>
          <p>Stretch program</p>
          <p>Monthly Assessment</p>
          <button>Reserve time</button>
        </div>
      </div>
    </>
  )
}
