import React from "react";
import image from "../assets/image1.png";
import logo from "../assets/logo.png";
import profile from "../assets/profile2.png";
import bg from "../assets/background.png";
const Hero = () => {
	return (
		<div className="grid grid-cols-10 mt-10">
			<div
				className="bg-zinc-700 p-10 col-span-7 rounded-xl  bg-cover "
				style={{ backgroundImage: `url(${bg})` }}
			>
				{/* style={{ backgroundImage: `url(${bg})` }} */}
				<h1 className="text-4xl  font-regular">Hi👋, I’m </h1>
				<h1 className="text-9xl mt-3 font-bold text-gradient-to-r from-cyan-500 to-blue-500 ">
					Shailesh Sawale
				</h1>
				<h1 className="text-2xl mt-3 font-light">
					I ❤️ to Design & Developed Things.
				</h1>
			</div>
			<div
				className="rounded-xl bg-cover bg-center ml-5 col-span-3"
				style={{ backgroundImage: `url(${profile})` }}
			>
				{/* <img className="rounded-xl bg-cover bg-center " src={profile} alt="" /> */}
			</div>
		</div>
	);
};

export default Hero;
