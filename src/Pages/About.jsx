import React from "react";
import Header from "../Components/Header";
import "animate.css";
import Hero2 from "../Components/Hero2";
const About = () => {
	return (
		<div className="">
			<div className="container2 lg:container mx-auto pt-5 p-5 md:p-0">
				<Header />
				<div>
					<h1 className="text-[10rem] text-center text-zinc-600 font-bold animate__animated animate__fadeIn">
						About ME
					</h1>
				</div>
				<Hero2 />
			</div>
		</div>
	);
};

export default About;
