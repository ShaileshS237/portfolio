import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";
import { ArrowRight, Sparkles, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/constants";
import Navbar from "@/Components/Navbar";
import PageHeader from "@/Components/PageHeader";
import PageContainer, { MainContent } from "@/Components/PageContainer";
import ProjectCard from "@/Components/ProjectCard";

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
			<Navbar title="Work" />
			<MainContent>
				{/* Section Header - Paragon Style */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
					className="text-center mb-20"
				>
					{/* Pill badge */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.1, duration: 0.5 }}
						className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
					>
						<Sparkles className="w-4 h-4 text-primary" />
						<span className="text-sm font-medium text-primary">My Portfolio</span>
					</motion.div>

					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-b from-foreground via-foreground to-muted-foreground/70 bg-clip-text text-transparent">
						Featured Projects
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
						A showcase of my apps, websites, and experiments.
						Here are some of the projects I've built.
					</p>
				</motion.div>

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
					<Button
						size="lg"
						className="gap-3 rounded-full px-10 py-7 text-base font-semibold bg-gradient-to-r from-primary via-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-105 group"
						asChild
					>
						<a
							href="https://github.com/ShaileshS237?tab=repositories"
							target="_blank"
							rel="noopener noreferrer"
						>
							<ExternalLink className="w-5 h-5" />
							View all on GitHub
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
						</a>
					</Button>
				</motion.div>
			</MainContent>
		</PageContainer>
	);
};

export default Work;
