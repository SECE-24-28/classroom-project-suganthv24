import "./App.css";
import Feedbacks from "./components/Feedbacks";
import AddPost from "./components/AddPost";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditFeed from "./components/EditFeed";
import { FeedbackProvider } from "../Context/FeedbackContext";

function App() {

	return (
		<FeedbackProvider>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Feedbacks />} />
					<Route path="/addpost" element={<AddPost />} />
					<Route path="/editpost/:id" element={<EditFeed />} />
				</Routes>
			</Router>
		</FeedbackProvider>
	);
}

export default App;
