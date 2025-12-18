import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PROJECTS } from "@/constants";
import Navbar from "@/Components/Navbar";
import PageContainer, { MainContent } from "@/Components/PageContainer";
import { motion } from "framer-motion";

const AboutProject = () => {
	let { id } = useParams();
	const [projectDetails, setProjectDetails] = useState(null);

	useEffect(() => {
		let temp = PROJECTS.filter((x) => x.id == id);
		setProjectDetails(temp[0]);
	}, [id]);

	if (!projectDetails) {
		return (
			<PageContainer>
				<Navbar />
				<MainContent>
					<p className="text-center text-muted-foreground">Loading project details...</p>
				</MainContent>
			</PageContainer>
		);
	}

	return (
		<PageContainer>
			<Navbar />
			<MainContent maxWidth="max-w-5xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="space-y-8"
				>
					<div className="rounded-lg overflow-hidden border border-muted">
						<img
							className="w-full h-auto"
							src={process.env.PUBLIC_URL + "/images/projects/la_background.jpg"}
							alt={projectDetails.project_name}
						/>
					</div>

					<div className="flex justify-center md:justify-start">
						<img
							className="w-full max-w-md"
							src={
								process.env.PUBLIC_URL +
								"/images/projects/projects_logo/bktcard_logo.png"
							}
							alt={`${projectDetails.project_name} logo`}
						/>
					</div>

					<div className="prose prose-lg dark:prose-invert max-w-none">
						<p className="text-base leading-relaxed">
							LoveAkot is a mobile application developed for the people of Akot.
							This will enable citizens to track and assist the people for the
							availability of the essential services in the Akot.
						</p>

						<p className="text-base leading-relaxed">
							While the coronavirus pandemic and changing rules and regulations by
							the government made it difficult to find whether the shop nearby you
							are open or available for the services or delivering the products or
							not.
						</p>

						<p className="text-base leading-relaxed">
							This application is aimed to reach out to the citizens with the
							latest update about the power cut or shortage of water supply,
							detailed information about the events like health check camps, news
							around the city, do and don't announcements, and media bulletins of
							the Akot.
						</p>

						<p className="text-base leading-relaxed">
							To stop people going outside for searching availability of the shops
							or service providers, we have developed a technological solution
							i.e. an android application.
						</p>

						<p className="text-base leading-relaxed">
							This mobile application will allow people to contribute the
							information for the nearby services, such as the name of the shop,
							opening and closing timings, list of services, shop review. Hence
							the updated and latest information is available for you.
						</p>

						<p className="text-base leading-relaxed">
							Download the LoveAkot app to access the information at your
							fingertips.
						</p>
					</div>
				</motion.div>
			</MainContent>
		</PageContainer>
	);
};

export default AboutProject;
