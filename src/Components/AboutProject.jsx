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
						"/images/projects/projects_logo/bktcard_logo.png"
					}
					alt=""
				/>
				<div className="mt-4 ml-4">
					<p className="">
						LoveAkot is a mobile application developed for the people of Akot.
						This will enable citizens to track and assist the people for the
						availability of the essential services in the Akot. <br />
						<br />
						While the coronavirus pandemic and changing rules and regulations by
						the government made it difficult to find whether the shop nearby you
						are open or available for the services or delivering the products or
						not.
						<br />
						<br />
						This application is aimed to reach out to the citizens with the
						latest update about the power cut or shortage of water supply,
						detailed information about the events like health check camps, news
						around the city, do and don’t announcements, and media bulletins of
						the Akot.
						<br />
						<br />
						To stop people going outside for searching availability of the shops
						or service providers, we have developed a technological solution
						i.e. an android application.
						<br />
						<br />
						This mobile application will allow people to contribute the
						information for the nearby services, such as the name of the shop,
						opening and closing timings, list of services, shop review. Hence
						the updated and latest information is available for you.
						<br />
						<br />
						Download the LoveAkot app to access the information at your
						fingertips.
						<br />
						<br />
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutProject;
