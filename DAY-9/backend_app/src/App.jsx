import "./App.css";
import Feedbacks from "./components/Feedbacks";
import AddPost from "./components/AddPost"; 	
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {

	return (
		<>
			<Navbar/>
			<Router>
				<Routes>
					<Route path="/" element={<Feedbacks/>}/>
					<Route path="/addpost" element={<AddPost/>}/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
