import React, { useEffect } from "react";
import Experiance from "../Components/Experiance";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

const Home = () => {
	return (
		<div className="">
			<div className="container2 lg:container mx-auto pt-5 p-5 md:p-0">
				<Header />

				<Hero />
				<Skills />

				{/* <h1 className="mt-10 font-bold md:text-[2.5rem] text-[1.4rem] ">
					I have experience with front-end technologies such as{" "}
					<span className="text-orange-600">HTML</span>,{" "}
					<span className="text-blue-700">CSS</span>, and
					<span className="text-yellow-300"> JavaScript</span> and I am able to
					turn design mockups into functional web pages. I have a keen eye for
					detail and a passion for creating seamless and intuitive user
					experiences.
				</h1> */}
				<Projects />

				<Experiance />
			</div>

			<Footer />
		</div>
	);
};

export default Home;
