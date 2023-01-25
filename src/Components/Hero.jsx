import React from "react";
import image from "../assets/image1.png";
import logo from "../assets/logo.png";
import profile from "../assets/profile2.png";
import bg from "../assets/background.png";
const Hero = () => {
	return (
		<div className="grid  lg:grid-rows-1 grid-cols-10 mt-10 gap-5">
			<div
				className="bg-zinc-700 p-10 col-span-10 lg:col-span-7 rounded-xl bg-cover "
				style={{ backgroundImage: `url(${bg})` }}
			>
				{/* style={{ backgroundImage: `url(${bg})` }} */}
				<h1 className="text-4xl  font-regular">Hi👋, I’m </h1>
				<h1 className="text-7xl lg:text-9xl mt-3 font-bold ">
					Shailesh Sawale
				</h1>
				{/* text-transparent bg-clip-text bg-gradient-to-r from-[#fcff9e] to-[#c67700] */}
				{/* background: linear-gradient(90deg, #fcff9e 0%, #c67700 100%); */}
				<h1 className="text-2xl mt-3 font-light">
					I ❤️ to Design & Developed Things.
				</h1>
			</div>
			<div
				className="rounded-xl bg-cover bg-center invisible lg:visible col-span-3"
				style={{ backgroundImage: `url(${profile})` }}
			>
				{/* <img className="rounded-xl bg-cover bg-center " src={profile} alt="" /> */}
			</div>
		</div>
	);
};

export default Hero;
