import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/constants";
import Navbar from "@/Components/Navbar";
import PageHeader from "@/Components/PageHeader";
import PageContainer, { MainContent } from "@/Components/PageContainer";
import ProjectCard from "@/Components/ProjectCard";
import ViewButton from "@/Components/ViewButton";

// Paragon-style bento grid pattern
// Creates visual hierarchy with varying card sizes for dynamic layouts
const getBentoSize = (index, total) => {
	// Featured pattern creates visual interest
	if (index === 0) return "large"; // First card is large (2x2)
	if (index === 3) return "wide";  // Fourth card is wide (2x1)
	if (index === 5) return "tall";  // Sixth card is tall (1x2)
	if (index === 7) return "wide";  // Eighth card is wide
	return "normal";
};

const Work = () => {
	return (
		<PageContainer title="Projects">
			<Navbar title="Projects" />
			<MainContent>
				<PageHeader
					title="Featured Projects"
					description="A showcase of my apps, websites, and experiments."
				/>

				{/* Bento Grid - Paragon Style with improved gaps and auto-rows */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7 auto-rows-fr">
					{PROJECTS.map((project, index) => (
						<ProjectCard
							key={project.id}
							project={project}
							index={index}
							size={getBentoSize(index, PROJECTS.length)}
						/>
					))}
				</div>

				{/* See All Projects - Paragon Style with enhanced CTA */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3, duration: 0.6 }}
					className="flex flex-col items-center mt-24 gap-4"
				>
					<p className="text-muted-foreground text-sm">Want to see more?</p>
					<ViewButton href="https://github.com/ShaileshS237?tab=repositories" className="text-base">
						View all on GitHub
					</ViewButton>
				</motion.div>
			</MainContent>
		</PageContainer>
	);
};

export default Work;
