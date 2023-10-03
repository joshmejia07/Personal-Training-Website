import "../../programs.css"
import { NavLink } from "react-router-dom"

export default function Programs() {
  return (
    <div className="page-container">
      <h1>Programs Page</h1>
      <input placeholder="Search Products" className="search-bar" />
      <nav>
        <NavLink className="nav-link">In Person</NavLink>
        <NavLink className="nav-link">Online</NavLink>
        <NavLink className="nav-link">Recovery</NavLink>
        <NavLink className="nav-link">Consultation</NavLink>
      </nav>
    </div>
  )
}
