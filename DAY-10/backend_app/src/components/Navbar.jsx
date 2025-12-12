import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

export default function Navbar() {
	return (
		<nav>
			<h1>Feedback Collector</h1>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/addpost">Add Post</Link></li>
			</ul>
		</nav>
	)
}