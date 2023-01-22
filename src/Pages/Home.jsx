import React from "react";
import Experiance from "../Components/Experiance";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Skills from "../Components/Skills";
const Home = () => {
	return (
		<div>
			<button className="fixed z-90 bottom-10 right-8 bg-zinc-700 w-250 h-50 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-blue-700 px-[30px] py-[15px] ">
				<h3>Let's Talk 👋</h3>
			</button>
			<div className="container mx-auto pt-5">
				<Header />
				<div
					className="mt-5"
					style={{ height: "0.5px", background: "#3f3f46" }}
				></div>
				<Hero />
				<Experiance />
			</div>
			<Footer />
			{/* <Skills /> */}
		</div>
	);
};

export default Home;
