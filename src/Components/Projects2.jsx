import React from "react";
import { PROJECTS } from "../Constant/constant";
import Title from "./Title";
import "animate.css";
import { Link, NavLink } from "react-router-dom";
import bg from "../assets/background.png";
// import image from "../assets/image1.png";
// import logo from "../assets/logo.png";
// import profile from "../assets/profile2.png";
// import bg from "../assets/background.png";
const Projects2 = () => {
	const checkStatus = (status) => {
		if (status === "1") return <span className=" bg-green-500 dot"></span>;
		else if (status === "2")
			return <span className=" bg-yellow-500 dot"></span>;
		else if (status === "3")
			return <span className=" bg-orange-500 dot"></span>;
	};

	return (
		<div className="mt-3">
			<div className="grid grid-cols-12">
				<div className="md:col-span-12 col-span-12">
					For all the coding projects, check out my &nbsp;
					<a
						href="https://github.com/ShaileshS237"
						target="_blank"
						rel="noreferrer"
						className="text-[cyan]"
					>
						Github Repos.
					</a>
				</div>
			</div>
			<div className="flex flex-col md:flex-row mt-3 gap-3">
				<div>
					<span className=" bg-green-500 dot"></span> : Completed
				</div>
				<div className="items-center">
					<span className="bg-yellow-500 dot"></span> : Completed but required
					improvisation
				</div>
				<div>
					<span className=" bg-orange-500 dot"></span> : In Progress
				</div>
			</div>
			<div className="grid grid-cols-3 mt-5 gap-4 scroll-smooth mb-10">
				{PROJECTS.map((val) => {
					return (
						<div
							key={val.id}
							className="animate__animated animate__fadeIn col-span-3 md:col-span-1 border border-zinc-600 rounded-xl overflow-hidden"
						>
							<div className="p-3 bg-zinc-800 flex items-center justify-end">
								<div>{checkStatus(val.status)}</div>
							</div>
							<div className="p-3">
								{val.icon ? (
									<img
										className="w-64"
										src={process.env.PUBLIC_URL + val.icon}
										alt=""
									/>
								) : (
									<div>
										<h1 className="text-3xl px-1 font-bold">
											{val.project_name}
										</h1>
									</div>
								)}
							</div>
							<div className="px-5 py-3">
								{/* <span className=" bg-white text-black px-4 py-2 rounded">
									{val.type}
								</span> */}
								<div>
									<span className="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease mr-3">
										{val.type} - {val.project_type} Project
									</span>
								</div>
							</div>
							<div className="px-5 py-3  ">
								<p className="">{val.description}</p>
								{/* <div className="grid grid-cols-4">
									<img
										src={process.env.PUBLIC_URL + "images/skills/ionic.png"}
										alt=""
										className="rounded-mdl"
									/>
								</div> */}
								<div className="flex gap-3 mt-3 mb-2">
									<a href={val.href} target="_blank" rel="noreferrer">
										<img
											src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png"
											alt=""
											className="h-10 invert"
										/>
									</a>
									<a href={val.livelink} target="_blank" rel="noreferrer">
										{val.type == "Mobile App" ? (
											<img
												src="https://cdn-icons-png.flaticon.com/512/300/300218.png"
												alt=""
												className="h-10"
											/>
										) : (
											<img
												src="https://cdn-icons-png.flaticon.com/512/5909/5909151.png"
												alt=""
												className="h-10"
											/>
										)}
									</a>
									{/* <Link to={`/aboutproject/${val.id}`}>
										<button className=" text-white px-3 py-2 rounded-lg bg-zinc-700 ">
											Know More
										</button>
									</Link> */}
								</div>

								{/* <button className=" text-white px-3 py-2 mt-3 rounded-lg border "></button>
								</a> */}
							</div>
						</div>
					);
				})}
			</div>
			{/* <h1
				className="text-4xl text-zinc-400
			  font-bold"
			>
			
				UI Projects :
			</h1>
			<div className="grid grid-cols-4 gap-3 my-5 ">
				<div className="bg-cover col-span-2 rounded-lg  overflow-hidden  ">
					<img
						className=" rounded-lg hover:scale-105 hover:rotate-[-2deg] transition-all duration-200 ease-in delay-200 "
						src={process.env.PUBLIC_URL + "/images/projects/UI/2.png"}
						alt=""
					/>
				</div>
				<div className="bg-cover rounded-md col-span-2">
					<img
						className="rounded-lg"
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
						className="rounded-md"
						src={process.env.PUBLIC_URL + "/images/projects/UI/6.png"}
						alt=""
					/>
				</div>
				<div className="bg-cover rounded-md col-span-1">
					<img
						className="rounded-xl"
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
			</div> */}
		</div>
	);
};

export default Projects2;
