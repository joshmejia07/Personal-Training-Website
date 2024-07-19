import lacrosseBall from "../../assets/images/lacrosse-ball.jpg"
import jumpRope from "../../assets/images/jump-rope.jpg"
import protein from "../../assets/images/whey-protein.jpg"
import creatine from "../../assets/images/creatine.jpg"
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
            <Link to="shop/12">
              <img
                className="product-img"
                src={lacrosseBall}
                alt="Lacrosse ball"
                loading="lazy"
              />
            </Link>
            <h5>Lacrosse Ball</h5>
            <p>$10</p>
          </div>

          <div className="products-grid-item">
            <Link to="shop/7">
              <img
                className="product-img"
                src={jumpRope}
                alt="Jump Rope"
                loading="lazy"
              />
            </Link>
            <h5>Jump Rope</h5>
            <p>$15</p>
          </div>
          <div className="products-grid-item">
            <Link to="shop/1">
              <img
                className="product-img"
                src={protein}
                alt="Protein Powder"
                loading="lazy"
              />
            </Link>
            <h5>Protein Powder</h5>
            <p>$50</p>
          </div>

          <div className="products-grid-item">
            <Link to="shop/3">
              <img
                className="product-img"
                src={creatine}
                alt="Pre-Workout"
                loading="lazy"
              />
            </Link>
            <h5>Creatine</h5>
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
