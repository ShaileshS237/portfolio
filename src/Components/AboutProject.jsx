import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { PROJECTS, TECH_KEYWORDS, PROJECT_STATUS_CONFIG } from "@/constants";
import Navbar from "@/Components/Navbar";
import PageContainer, { MainContent } from "@/Components/PageContainer";
import ViewButton from "@/Components/ViewButton";
import { Button } from "@/Components/ui/button";
import { Circle, Github, Globe, ExternalLink, Smartphone } from "lucide-react";

const extractTechStack = (description, fallback = []) => {
	if (!description) return fallback;
	const techMatch = description.match(/Tech Stack:([^.]+)/i);
	if (techMatch) {
		return techMatch[1].split(",").map((tech) => tech.trim()).filter(Boolean);
	}
	return TECH_KEYWORDS.filter((k) => description.toLowerCase().includes(k.toLowerCase()));
};

const sanitizeDescription = (description) => {
	if (!description) return [];
	const withoutTech = description.replace(/Tech Stack:[^.]+/i, "").trim();
	return withoutTech
		.split(/\.\s+/)
		.map((line) => line.trim())
		.filter(Boolean);
};

const AboutProject = () => {
	const { id } = useParams();
	const [projectDetails, setProjectDetails] = useState(null);

	useEffect(() => {
		const match = PROJECTS.find((project) => String(project.id) === String(id));
		setProjectDetails(match || null);
	}, [id]);

	const techStack = useMemo(
		() => extractTechStack(projectDetails?.description, projectDetails?.techStack || []),
		[projectDetails]
	);

	if (!projectDetails) {
		return (
			<PageContainer>
				<Navbar title="Project Details" />
				<MainContent>
					<p className="text-center text-muted-foreground">Loading project details...</p>
				</MainContent>
			</PageContainer>
		);
	}

	const statusConfig = PROJECT_STATUS_CONFIG[projectDetails.status] || { label: "Unknown", color: "bg-muted text-muted-foreground border-border" };
	const descriptionLines = sanitizeDescription(projectDetails.description);
	const primaryLink = projectDetails.website || projectDetails.livelink || projectDetails.href || "";

	return (
		<PageContainer title={`${projectDetails.project_name} | Project`}>
			<Navbar title="Project Details" />
			<MainContent maxWidth="max-w-6xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="space-y-10"
				>
					{/* Hero */}
					<div className="relative overflow-hidden rounded-2xl border border-muted bg-gradient-to-br from-primary/5 via-card to-background p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10">
						<div className="flex-1 space-y-4">
							<p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Project Spotlight</p>
							<h1 className="text-3xl md:text-4xl font-bold leading-tight">{projectDetails.project_name}</h1>

							<div className="flex flex-wrap items-center gap-2">
								{projectDetails.status && (
									<span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${statusConfig.color}`}>
										<Circle className="w-2 h-2 fill-current" />
										{statusConfig.label}
									</span>
								)}
								<span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-border/40 bg-muted/50 text-muted-foreground">
									{projectDetails.type === "Mobile App" ? <Smartphone className="w-3.5 h-3.5" /> : <Globe className="w-3.5 h-3.5" />}
									{projectDetails.type || "Project"}
								</span>
								{projectDetails.project_type && (
									<span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-border/40 bg-muted/50 text-muted-foreground">
										{projectDetails.project_type}
									</span>
								)}
								{projectDetails.lUdpate && (
									<span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-border/40 bg-muted/50 text-muted-foreground">
										Last updated: {projectDetails.lUdpate}
									</span>
								)}
							</div>

							<div className="flex flex-wrap gap-3 mt-4">
								{primaryLink && (
									<ViewButton href={primaryLink}>Visit Website</ViewButton>
								)}
								{projectDetails.livelink && projectDetails.livelink !== primaryLink && (
									<ViewButton href={projectDetails.livelink}>Live Demo</ViewButton>
								)}
								{projectDetails.adminPanel && (
									<ViewButton href={projectDetails.adminPanel}>Admin Panel</ViewButton>
								)}
								{projectDetails.href && (
									<Button
										variant="outline"
										className="gap-2"
										asChild
									>
										<a href={projectDetails.href} target="_blank" rel="noreferrer">
											<Github className="w-4 h-4" />
											Source Code
										</a>
									</Button>
								)}
							</div>
						</div>

						{projectDetails.icon && (
							<div className="w-full md:w-56 h-32 md:h-40 flex items-center justify-center rounded-xl bg-muted/40 border border-border/50 p-4 self-start">
								<img src={projectDetails.icon} alt={projectDetails.project_name} className="w-full h-full object-contain" />
							</div>
						)}
					</div>

					{/* Description */}
					<div className="grid gap-6 md:grid-cols-3">
						<div className="md:col-span-2 space-y-4">
							<h2 className="text-lg font-semibold">Overview</h2>
							<div className="space-y-3 text-muted-foreground leading-relaxed">
								{descriptionLines.length > 0 ? (
									descriptionLines.map((line, idx) => (
										<p key={idx}>{line}.</p>
									))
								) : (
									<p>No description provided.</p>
								)}
							</div>
						</div>

						<div className="space-y-4">
							<h2 className="text-lg font-semibold">Tech Stack</h2>
							<div className="flex flex-wrap gap-2">
								{techStack.length > 0 ? (
									techStack.map((tech, idx) => (
										<span
											key={idx}
											className="px-3 py-1.5 rounded-lg border border-border/40 bg-muted/50 text-sm text-foreground/90"
										>
											{tech}
										</span>
									))
								) : (
									<span className="text-muted-foreground text-sm">No tech details available.</span>
								)}
							</div>
						</div>
					</div>

					{/* Quick Links */}
					<div className="space-y-3">
						<h2 className="text-lg font-semibold">Key Links</h2>
						<div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
							{primaryLink && (
								<a
									href={primaryLink}
									target="_blank"
									rel="noreferrer"
									className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/40 px-4 py-3 hover:border-primary/40 hover:bg-primary/5 transition-colors"
								>
									<span className="flex items-center gap-2 text-sm font-medium">
										<Globe className="w-4 h-4" /> Website
									</span>
									<ExternalLink className="w-4 h-4 text-muted-foreground" />
								</a>
							)}
							{projectDetails.livelink && (
								<a
									href={projectDetails.livelink}
									target="_blank"
									rel="noreferrer"
									className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/40 px-4 py-3 hover:border-primary/40 hover:bg-primary/5 transition-colors"
								>
									<span className="flex items-center gap-2 text-sm font-medium">
										<ExternalLink className="w-4 h-4" /> Live Demo
									</span>
									<ExternalLink className="w-4 h-4 text-muted-foreground" />
								</a>
							)}
							{projectDetails.adminPanel && (
								<a
									href={projectDetails.adminPanel}
									target="_blank"
									rel="noreferrer"
									className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/40 px-4 py-3 hover:border-primary/40 hover:bg-primary/5 transition-colors"
								>
									<span className="flex items-center gap-2 text-sm font-medium">
										<Globe className="w-4 h-4" /> Admin Panel
									</span>
									<ExternalLink className="w-4 h-4 text-muted-foreground" />
								</a>
							)}
							{projectDetails.href && (
								<a
									href={projectDetails.href}
									target="_blank"
									rel="noreferrer"
									className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/40 px-4 py-3 hover:border-primary/40 hover:bg-primary/5 transition-colors"
								>
									<span className="flex items-center gap-2 text-sm font-medium">
										<Github className="w-4 h-4" /> Source Code
									</span>
									<ExternalLink className="w-4 h-4 text-muted-foreground" />
								</a>
							)}
							{!primaryLink && !projectDetails.livelink && !projectDetails.adminPanel && !projectDetails.href && (
								<p className="text-muted-foreground text-sm">No links available for this project.</p>
							)}
						</div>
					</div>
				</motion.div>
			</MainContent>
		</PageContainer>
	);
};

export default AboutProject;
