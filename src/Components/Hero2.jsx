import React from "react";
import image from "../assets/image1.png";
import logo from "../assets/logo.png";
import profile from "../assets/profile2.png";
import bg from "../assets/background.png";
import { BsArrowRight } from "react-icons/bs";
const Hero2 = () => {
	return (
		<div className="grid  animate__animated animate__fadeIn">
			<div
				className="bg-zinc-700 p-10 col-span-10 lg:col-span-7 rounded-xl bg-cover "
				style={{ backgroundImage: `url(${bg})` }}
			>
				<h1 className="text-3xl  font-regular">Hi👋, I’m </h1>
				<h1 className="text-6xl lg:text-9xl mt-3 font-bold ">
					Shailesh Sawale
				</h1>

				<h1 className="text-2xl mt-3 font-light">
					I ❤️ to Design & Developed Things (& Loved Rounded Design Too)
				</h1>
			</div>
		</div>
	);
};

export default Hero2;
