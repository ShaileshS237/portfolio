import React from "react";
import { useTheme } from "@/Components/theme-provider";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { ArrowUpRight, Sun, Moon, Github, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/constants";
import { Link } from "react-router-dom";

const Work = () => {
	const { theme, setTheme } = useTheme();

	return (
		<div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/10">
			{/* Navbar */}
			<nav className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-sm bg-background/80 border-b">
				<div className="container max-w-3xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
					<div className="flex items-center gap-8">
						<Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
							← Back to Home
						</Link>
					</div>
					<div className="flex items-center gap-2">
						<Button
							variant="ghost"
							size="icon"
							className="h-9 w-9"
							onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
						>
							{theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
						</Button>
					</div>
				</div>
			</nav>

			<main className="container max-w-3xl mx-auto pt-24 pb-12 px-4 md:px-6 space-y-12">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="space-y-2"
				>
					<h1 className="text-3xl font-bold tracking-tight">Projects</h1>
					<p className="text-muted-foreground">A showcase of my apps, websites, and experiments.</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{PROJECTS.map((project, index) => {
						// Determine primary link: livelink > href (GitHub) > "#"
						const primaryLink = project.livelink || project.href || "#";

						return (
							<motion.div
								key={project.id}
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: index * 0.1 }}
								className="h-full"
							>
								<a href={primaryLink} target="_blank" rel="noreferrer" className="group block h-full">
									<Card className="transition-all duration-300 hover:bg-muted/50 h-full hover:border-primary/50 relative overflow-hidden">
										<CardContent className="p-5 space-y-3 flex flex-col h-full">
											<div className="flex items-start justify-between">
												<div className="space-y-1">
													<h3 className="font-semibold text-lg group-hover:underline decoration-primary underline-offset-4 flex items-center gap-2 leading-tight">
														{project.project_name}
													</h3>
													<div className="text-xs text-muted-foreground flex items-center gap-1.5">
														<span>{project.project_type}</span>
														<span>•</span>
														<span>{project.type}</span>
													</div>
												</div>
												<ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
											</div>

											<p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed flex-1">
												{project.description}
											</p>

											{/* Footer with Icons/Tags */}
											<div className="flex items-center justify-between pt-2 mt-auto">
												<div className="flex gap-2">
													{project.status === "2" && <Badge variant="secondary" className="text-[10px] h-5 px-1.5">Completed</Badge>}
													{project.status === "1" && <Badge variant="outline" className="text-[10px] h-5 px-1.5 border-dashed">In Progress</Badge>}
												</div>

												<div className="flex items-center gap-2">
													{project.href && (
														<div className="p-1.5 rounded-md hover:bg-background text-muted-foreground hover:text-foreground transition-colors" title="View Code">
															<Github className="w-4 h-4" />
														</div>
													)}
													{project.livelink && (
														<div className="p-1.5 rounded-md hover:bg-background text-muted-foreground hover:text-foreground transition-colors" title="View Live">
															<Globe className="w-4 h-4" />
														</div>
													)}
												</div>
											</div>
										</CardContent>
									</Card>
								</a>
							</motion.div>
						);
					})}
				</div>
			</main>
		</div>
	);
};

export default Work;
