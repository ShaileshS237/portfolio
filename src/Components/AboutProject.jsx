import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { PROJECTS, TECH_KEYWORDS, PROJECT_STATUS_CONFIG } from "@/constants";
import Navbar from "@/Components/Navbar";
import PageContainer, { MainContent } from "@/Components/PageContainer";
import ViewButton from "@/Components/ViewButton";
import { Button } from "@/Components/ui/button";
import { Circle, Github, Globe, ExternalLink, Smartphone, Play } from "lucide-react";

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
	const [showVideoModal, setShowVideoModal] = useState(false);

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
						<div className="md:col-span-2 space-y-6">
							<h2 className="text-lg font-semibold">Overview</h2>
							<p className="text-muted-foreground leading-relaxed">
								{projectDetails.description}
							</p>

							{/* Vision Section */}
							{projectDetails.vision && (
								<div className="space-y-3">
									<div className="flex items-center gap-2">
										<div className="w-1 h-6 bg-primary rounded-full" />
										<h3 className="text-base font-semibold">Vision & Purpose</h3>
									</div>
									<p className="text-muted-foreground leading-relaxed pl-4">
										{projectDetails.vision}
									</p>
								</div>
							)}

							{/* Why I Built This */}
							{projectDetails.whyBuilt && (
								<div className="space-y-3">
									<div className="flex items-center gap-2">
										<div className="w-1 h-6 bg-amber-500 rounded-full" />
										<h3 className="text-base font-semibold">Why I Built This</h3>
									</div>
									<p className="text-muted-foreground leading-relaxed pl-4">
										{projectDetails.whyBuilt}
									</p>
								</div>
							)}

							{/* Core Features */}
							{projectDetails.features && projectDetails.features.length > 0 && (
								<div className="space-y-4">
									<div className="flex items-center gap-2">
										<div className="w-1 h-6 bg-primary rounded-full" />
										<h3 className="text-base font-semibold">Core Features</h3>
									</div>
									<div className="grid gap-3 sm:grid-cols-2">
										{projectDetails.features.map((feature, idx) => (
											<motion.div
												key={idx}
												initial={{ opacity: 0, y: 10 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ delay: idx * 0.1 }}
												className="group relative rounded-lg border border-border/50 bg-muted/30 p-4 hover:border-primary/40 hover:bg-primary/5 transition-all"
											>
												<div className="flex items-start gap-3">
													<span className="text-2xl flex-shrink-0">{feature.icon}</span>
													<div className="space-y-1">
														<h4 className="text-sm font-semibold">{feature.title}</h4>
														<p className="text-xs text-muted-foreground leading-relaxed">
															{feature.description}
														</p>
													</div>
												</div>
											</motion.div>
										))}
									</div>
								</div>
							)}

							{/* What Makes It Different */}
							{projectDetails.differentiators && (
								<div className="space-y-3">
									<div className="flex items-center gap-2">
										<div className="w-1 h-6 bg-primary rounded-full" />
										<h3 className="text-base font-semibold">What Makes It Different</h3>
									</div>
									<p className="text-muted-foreground leading-relaxed pl-4">
										{projectDetails.differentiators}
									</p>
								</div>
							)}

							{/* My Role */}
							{projectDetails.myRole && (
								<div className="rounded-lg border border-primary/20 bg-primary/5 p-5 space-y-2">
									<div className="flex items-center gap-2">
										<h3 className="text-base font-semibold">My Role (Founder & Developer)</h3>
									</div>
									<p className="text-muted-foreground leading-relaxed text-sm">
										{projectDetails.myRole}
									</p>
								</div>
							)}

							{/* Current Status */}
							{projectDetails.currentStatus && (
								<div className="space-y-3">
									<div className="flex items-center gap-2">
										<div className="w-1 h-6 bg-green-500 rounded-full" />
										<h3 className="text-base font-semibold">Current Status</h3>
									</div>
									<p className="text-muted-foreground leading-relaxed pl-4">
										{projectDetails.currentStatus}
									</p>
								</div>
							)}

							{/* After Launch & Impact */}
							{projectDetails.impact && projectDetails.impact.length > 0 && (
								<div className="space-y-3">
									<div className="flex items-center gap-2">
										<div className="w-1 h-6 bg-emerald-500 rounded-full" />
										<h3 className="text-base font-semibold">After Launch & Impact</h3>
									</div>
									<div className="grid gap-2 sm:grid-cols-2 pl-4">
										{projectDetails.impact.map((item, idx) => (
											<motion.div
												key={idx}
												initial={{ opacity: 0, x: -10 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: idx * 0.05 }}
												className="flex items-start gap-2 text-muted-foreground text-sm rounded-lg border border-border/40 bg-muted/20 p-3 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all"
											>
												<span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
												<span>{item}</span>
											</motion.div>
										))}
									</div>
								</div>
							)}

							{/* Future Roadmap */}
							{projectDetails.roadmap && projectDetails.roadmap.length > 0 && (
								<div className="space-y-3">
									<div className="flex items-center gap-2">
										<div className="w-1 h-6 bg-primary rounded-full" />
										<h3 className="text-base font-semibold">Future Roadmap</h3>
									</div>
									<ul className="space-y-2 pl-4">
										{projectDetails.roadmap.map((item, idx) => (
											<motion.li
												key={idx}
												initial={{ opacity: 0, x: -10 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: idx * 0.05 }}
												className="flex items-start gap-2 text-muted-foreground text-sm"
											>
												<span className="text-primary mt-1">•</span>
												<span>{item}</span>
											</motion.li>
										))}
									</ul>
								</div>
							)}

							{/* Demo Video Placeholder */}
							<div className="mt-6">
								<h3 className="text-base font-semibold mb-3">Demo Video</h3>
								{projectDetails.videoLink ? (
									<div
										className="aspect-video w-full overflow-hidden rounded-xl border border-border/50 bg-black/60 cursor-pointer group/video relative"
										onClick={() => setShowVideoModal(true)}
									>
										<img
											src="/loveakot_webiste.png"
											alt="Video thumbnail"
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/60 transition-colors flex items-center justify-center">
											<div className="w-20 h-20 rounded-full bg-primary/90 group-hover/video:bg-primary flex items-center justify-center transition-all group-hover/video:scale-110">
												<Play className="w-10 h-10 text-primary-foreground ml-1" />
											</div>
										</div>
									</div>
								) : (
									<div className="aspect-video w-full rounded-xl border border-dashed border-border/60 bg-gradient-to-br from-muted/40 to-muted/20 flex flex-col items-center justify-center gap-3 relative overflow-hidden">
										<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,120,120,0.1),transparent_50%)]" />
										<img
											src="/loveakot_webiste.png"
											alt="Placeholder"
											className="absolute inset-0 w-full h-full object-cover opacity-20"
										/>
										<div className="relative z-10 flex flex-col items-center gap-3">
											<div className="w-16 h-16 rounded-full bg-muted/60 border border-border/40 flex items-center justify-center">
												<Play className="w-8 h-8 text-muted-foreground" />
											</div>
											<p className="text-sm font-medium text-muted-foreground">Demo video coming soon</p>
										</div>
									</div>
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

				{/* Video Modal */}
				{showVideoModal && projectDetails.videoLink && (
					<div
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
						onClick={() => setShowVideoModal(false)}
					>
						<div
							className="relative w-full max-w-5xl mx-4 aspect-video rounded-xl overflow-hidden shadow-2xl"
							onClick={(e) => e.stopPropagation()}
						>
							<button
								onClick={() => setShowVideoModal(false)}
								className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
							>
								✕
							</button>
							<iframe
								title={`${projectDetails.project_name} demo video`}
								src={projectDetails.videoLink.replace('watch?v=', 'embed/').split('&')[0]}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								className="w-full h-full"
							/>
						</div>
					</div>
				)}
			</MainContent>
		</PageContainer>
	);
};

export default AboutProject;
