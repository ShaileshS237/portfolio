import React from "react";
import { useTheme } from "@/Components/theme-provider";
import { Button } from "@/Components/ui/button";
import { Badge } from "@/Components/ui/badge";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/constants";
import { Link } from "react-router-dom";
import Navbar from "@/Components/Navbar";
import PageHeader from "@/Components/PageHeader";
import PageContainer, { MainContent } from "@/Components/PageContainer";
import ProjectCard from "@/Components/ProjectCard";

const Work = () => {
	const { theme, setTheme } = useTheme();

	return (
		<PageContainer title="Projects">
			<Navbar title="Work" />
			<MainContent>
				<PageHeader
					title="Projects"
					description="A showcase of my apps, websites, and experiments."
				/>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
					{PROJECTS.map((project, index) => (
						<ProjectCard key={project.id} project={project} index={index} />
					))}
				</div>
			</MainContent>
		</PageContainer>
	);
};

export default Work;
