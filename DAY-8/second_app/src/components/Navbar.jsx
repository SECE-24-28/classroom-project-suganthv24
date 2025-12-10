import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>SUGANTH</h2>
      <ul className="nav-links">
        <li><Link id="link" to="/">Home</Link></li>
        <li><Link id="link" to="/students">Student List</Link></li>
        <li><Link id="link" to="/counter">Counter</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
