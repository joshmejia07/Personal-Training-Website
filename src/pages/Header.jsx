import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <Link className="site-logo">JXM</Link>
      <Link className="nav-links">Home</Link>
      <Link className="nav-links">About</Link>
      <Link className="nav-links">Consultation</Link>
      <Link className="nav-links">Training</Link>
    </header>
  )
}
