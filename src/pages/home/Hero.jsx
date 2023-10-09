import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <div className="hero-img">
      <div className="hero-text-container">
        <h4 className="text-colored">train with</h4>
        <h1>Josh Mejia</h1>
        <hr className="left" />
        <p>
          Over twelve years experience in personal training, nutritional
          coaching and fitness education.
        </p>
        <Link to="/programs">
          <button>See Programs</button>
        </Link>
      </div>
    </div>
  )
}
