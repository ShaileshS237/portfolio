import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Work from "./Pages/Work";
function App() {
	return (
		<BrowserRouter>
			<button
				style={{ zIndex: "16 !important" }}
				className="hidden md:block fixed z-99 bottom-6 right-12  bg-zinc-700 w-250 h-50 rounded-full drop-shadow-lg justify-center items-center text-white hover:bg-blue-700 px-[30px] py-[15px] transition-all duration-500 delay-75"
			>
				<h3>Let's Talk 👋 </h3>
			</button>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/work" element={<Work />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
