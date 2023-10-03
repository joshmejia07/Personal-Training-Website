import lacrosseBall from "../../assets/images/lacrosse-ball.jpg"
import jumpRope from "../../assets/images/jump-rope.jpg"
import protein from "../../assets/images/protein-powder.jpg"
import preWorkout from "../../assets/images/pre-workout.jpg"
import { Link } from "react-router-dom"

export default function Products() {
  return (
    <div className="products-bg">
      <div className="products-container">
        <div className="products-title">
          <h1>Fitness Products</h1>
          <hr className="center" />
          <p>
            I only recommend products that I myself would use. These products
            are tested and proven to deliver results and longevity.
          </p>
        </div>
        <div className="products-grid">
          <div className="products-grid-item">
            <img
              className="product-img"
              src={lacrosseBall}
              alt="Lacrosse ball"
            />
            <h5>Lacrosse Ball</h5>
            <p>$10</p>
          </div>

          <div className="products-grid-item">
            <img className="product-img" src={jumpRope} alt="Jump Rope" />
            <h5>Jump Rope</h5>
            <p>$15</p>
          </div>
          <div className="products-grid-item">
            <img className="product-img" src={protein} alt="Protein Powder" />
            <h5>Protein Powder</h5>
            <p>$50</p>
          </div>

          <div className="products-grid-item">
            <img className="product-img" src={preWorkout} alt="Pre-Workout" />
            <h5>Pre-Workout</h5>
            <p>$30</p>
          </div>
          <Link to="/shop" className="product-link">
            Browse all products
          </Link>
        </div>
      </div>
    </div>
  )
}
