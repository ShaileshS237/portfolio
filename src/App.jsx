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
import Gear from "./Pages/Gear";
import PersonalSpace from "./Pages/PersonalSpace";
import EvidenceWorkspace from "./features/evidence/EvidenceWorkspace";
function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/project" element={<Work />} />
				<Route path="/project-detail/:id" element={<AboutProject />} />
				<Route path="/about" element={<About />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/blogs/love-akot" element={<LoveAkotBlog />} />
				<Route path="/experience" element={<Experience />} />
				<Route path="/gear" element={<Gear />} />
				<Route path="/personal-space" element={<PersonalSpace />} />
				<Route path="/personal-space/evidence/*" element={<EvidenceWorkspace />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
