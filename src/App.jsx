import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Work from "./Pages/Work";
import AboutProject from "./Components/AboutProject";
import Blogs from "./Pages/Blogs";
import LoveAkotBlog from "./Pages/Blogs/LoveAkot";
import ScrollToTop from "./Components/ScrollToTop";
import Experience from "./Pages/Experience";
function App() {
	return (
		<BrowserRouter>


			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/project" element={<Work />} />
				<Route path="/aboutproject/:id" element={<AboutProject />} />
				<Route path="/about" element={<About />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/blogs/love-akot" element={<LoveAkotBlog />} />
				<Route path="/experience" element={<Experience />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
