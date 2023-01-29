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
const Projects = () => {
	const checkStatus = (status) => {
		if (status === "1") return <span className=" bg-green-500 dot"></span>;
		else if (status === "2")
			return <span className=" bg-yellow-500 dot"></span>;
		else if (status === "3")
			return <span className=" bg-orange-500 dot"></span>;
	};

	return (
		<div className="mt-10">
			<Title width={"full"} titlename={"Project"} />

			<div className="grid grid-cols-12">
				<div className="md:col-span-10 col-span-12">
					For all the coding projects, check out my &nbsp;
					<a
						href="https://github.com/ShaileshS237"
						target="_blank"
						rel="noreferrer"
						className="text-[cyan]"
					>
						Github Repos.
					</a>
					<br />
					Over the past few years, I have coded things that I am sort-of proud
					of. These are just a few of them. <br />
				</div>
				<div className="col-span-12 mt-4 md:mt-0 md:col-span-2">
					<Link to="/work">
						<button className="w-[100%] text-white px-3 py-2 rounded-lg bg-zinc-700 ">
							View All Projects
						</button>
					</Link>
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
			<div className="grid grid-cols-3 mt-7 gap-10 scroll-smooth">
				{PROJECTS.slice(0, 6).map((val) => {
					return (
						<div
							key={val.id}
							className="  md:transform-none hover:-translate-y-3 transition-all duration-300  animate__animated animate__fadeIn col-span-3 md:col-span-1 border border-zinc-700 rounded-2xl overflow-hidden"
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
									<span className="px-4 py-2 rounded-full text-black bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease mr-3">
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
									<Link to={`/aboutproject/${val.id}`}>
										<button className=" text-white px-3 py-2 rounded-lg bg-zinc-700 ">
											Know More
										</button>
									</Link>
								</div>

								{/* <button className=" text-white px-3 py-2 mt-3 rounded-lg border "></button>
								</a> */}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
