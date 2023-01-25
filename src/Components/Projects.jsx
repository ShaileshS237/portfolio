import React from "react";
import image from "../assets/image1.png";
import logo from "../assets/logo.png";
import profile from "../assets/profile2.png";
import bg from "../assets/background.png";
const Projects = () => {
	return (
		<div className="mt-10">
			<h1
				className="text-4xl text-zinc-400
			  font-bold"
			>
				UI Projects :
			</h1>

			<div className="grid grid-cols-4 gap-3 my-5 ">
				{/* <div className="bg-cover col-span-2 rounded-lg  overflow-hidden  ">
					<img
						className=" rounded-lg hover:scale-105 hover:rotate-[-2deg] transition-all duration-200 ease-in delay-200 "
						src={process.env.PUBLIC_URL + "/images/projects/UI/2.png"}
						alt=""
					/>
				</div> */}
				<div className="bg-cover rounded-md col-span-2">
					<img
						className=" rounded-xl"
						src={process.env.PUBLIC_URL + "/images/projects/UI/3.png"}
						alt=""
					/>
				</div>
				<div className="bg-cover rounded-md col-span-1">
					<img
						className=" rounded-xl"
						src={process.env.PUBLIC_URL + "/images/projects/UI/4.png"}
						alt=""
					/>
				</div>
				<div className="bg-cover rounded-md col-span-1">
					<img
						className=" rounded-xl"
						src={process.env.PUBLIC_URL + "/images/projects/UI/5.png"}
						alt=""
					/>
				</div>
				<div className="bg-cover rounded-md col-span-1">
					<img
						className=" rounded-xl"
						src={process.env.PUBLIC_URL + "/images/projects/UI/6.png"}
						alt=""
					/>
				</div>
				<div className="bg-cover rounded-md col-span-1">
					<img
						className=" rounded-xl"
						src={process.env.PUBLIC_URL + "/images/projects/UI/7.png"}
						alt=""
					/>
				</div>
				<div className="bg-cover rounded-md col-span-1">
					<img
						className=" rounded-xl"
						src={process.env.PUBLIC_URL + "/images/projects/UI/8.png"}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
