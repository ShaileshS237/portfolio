import React from "react";
import image from "../assets/image1.png";
import logo from "../assets/logo.png";
import profile from "../assets/profile2.png";
import bg from "../assets/background.png";
import { BsArrowRight } from "react-icons/bs";
import Social from "./Social";
import { Link } from "react-router-dom";
const Hero = () => {
	let temp = [{ id: 1 }, { id: 1 }];
	return (
		<div className="md:mt-10 mt-2 gap-5 text-center">
			<div
				className="bg-gray-700 p-10 col-span-10 lg:col-span-7 rounded-xl bg-cover "
				style={{ backgroundImage: `url(${bg})` }}
			>
				{/* style={{ backgroundImage: `url(${bg})` }} */}
				<h1 className="text-4xl  font-regular">
					Hi <span className="wave">👋</span>, I’m{" "}
				</h1>
				<h1 className="text-6xl lg:text-9xl mt-3 font-bold ">
					Shailesh Sawale
				</h1>
				{/* text-transparent bg-clip-text bg-gradient-to-r from-[#fcff9e] to-[#c67700] */}
				{/* background: linear-gradient(90deg, #fcff9e 0%, #c67700 100%); */}
				<h1 className="text-2xl mt-3 font-light">
					I ❤️ to Design & Developed Things
				</h1>
				<div className="flex justify-center">
					<a href={process.env.PUBLIC_URL + "/Shailesh_Resume.pdf"}>
						<button className=" border border-white flex items-center px-6 py-3 mt-7 hover:bg-[#2f3034] text-white hover:text-white transition-all duration-500 rounded-xl">
							Download Resume <BsArrowRight className="ml-5" />
						</button>
					</a>
				</div>

				{/* <Social align={"start"} mt={4} gap={1} /> */}
			</div>
			{/* <div
				className="rounded-xl bg-cover bg-center invisible lg:visible col-span-3"
				style={{ backgroundImage: `url(${profile})` }}
			>
				
			</div> */}
		</div>
	);
};

export default Hero;
