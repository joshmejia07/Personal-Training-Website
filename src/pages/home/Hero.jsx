import { Link } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import hero from "../../assets/images/hero-img.jpg"

export default function Hero() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 82em)" })

  const mediaQuery = (
    <>
      {isBigScreen ? (
        <div className="hero-widescreen">
          <div className="hero-text-bg">
            <div className="hero-text-container">
              <h4 className="text-colored">train with</h4>
              {/* <h1>Josh Mejia</h1> */}
              <h1>JXM</h1>
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
          <img className="hero-img-widescreen" src={hero} />
        </div>
      ) : (
        <div className="hero-img">
          <div className="hero-text-container">
            <h4 className="text-colored">train with</h4>
            <h1>JXM</h1>
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
      )}
    </>
  )

  return <>{mediaQuery}</>
}
