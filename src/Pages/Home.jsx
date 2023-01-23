import React from "react";
import Experiance from "../Components/Experiance";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
const Home = () => {
	return (
		<div>
			<button className="fixed z-90 bottom-10 right-8 bg-zinc-700 w-250 h-50 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-blue-700 px-[30px] py-[15px] ">
				<h3>Let's Talk 👋</h3>
			</button>
			<div className="container2 lg:container mx-auto pt-5">
				<Header />
				<div
					className="mt-5"
					style={{ height: "0.5px", background: "#3f3f46" }}
				></div>
				<Hero />
				<h1 className="mt-10 font-bold text-[3.00rem]">
					I have experience with front-end technologies such as HTML, CSS, and
					JavaScript, and I am able to turn design mockups into functional web
					pages. I have a keen eye for detail and a passion for creating
					seamless and intuitive user experiences.
				</h1>
				<Skills />
				<Experiance />
			</div>

			<Projects />
			<Footer />
		</div>
	);
};

export default Home;
