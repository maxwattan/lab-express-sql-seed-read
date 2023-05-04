import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <nav>
        <h1>
            <Link to="/songs" className="Links"><span>Tuner</span></Link>
        </h1>
        <button className="Nav-button">
            <Link to="/songs/new" className="Links">New Song</Link>
        </button>
    </nav>
  )
}