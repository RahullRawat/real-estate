import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Favorite from "./pages/Favorite/Favorite";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/favorite" element={<Favorite />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
