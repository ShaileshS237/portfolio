import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Routes, Route, useParams } from "react-router-dom";
import { PROJECTS } from "../Constant/constant";
import bg from "../assets/background.png";

const AboutProject = () => {
	let { id } = useParams();
	const [projectDetails, setProjectDetails] = useState(null);
	useEffect(() => {
		let temp = PROJECTS.filter((x) => x.id == id);
		setProjectDetails(temp[0]);
	}, []);
	return (
		<div>
			<div className="container mx-auto">
				<Header />
			</div>
			{/* <header
				className={`flex mt-5 items-center justify-center h-[400px] mb-12 bg-fixed bg-center bg-cover bg-[url("../public/images/projects/la_background.jpg")]`}
			></header> */}
			<header className="mt-10  ">
				<img
					className=""
					src={process.env.PUBLIC_URL + "/images/projects/la_background.jpg"}
					alt=""
				/>
			</header>
			<div className="container mx-auto mt-5">
				<img
					className="w-[30rem]"
					src={
						process.env.PUBLIC_URL +
						"/images/projects/projects_logo/la_logowhite.png"
					}
					alt=""
				/>
				<div className="mt-4 ml-4">
					<p className="">
						LoveAkot is a Social Media Android App for Akot(Native City) that
						aims to help people within a city. It helps in various ways like
						notifying what is going on in the city, help in to get contact no.
						of various people like electricians, plumbers, etc. in one click.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutProject;
