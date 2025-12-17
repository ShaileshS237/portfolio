import { useSearchParams, Link, useLocation } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import { useTheme } from "@/Components/theme-provider";
import QuoteSection from "../Components/QuoteSection";

import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import {
	Card,
	CardContent
} from "@/Components/ui/card";
import { Separator } from "@/Components/ui/separator";
import {
	EXPERIENCE,
	PROJECTS
} from "@/constants";
import {
	FileText,
	Github,
	Instagram,
	Linkedin,
	Mail,
	Moon,
	Send,
	Sun,
	Twitter,
	Youtube,
	ArrowUpRight,
	Terminal,
	Lightbulb,
	MapPin,
	Clock,
	Globe,
	User,
	Laptop
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../lib/supabase";

const TechBadge = ({ icon, name }) => (
	<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-muted bg-muted/50 text-sm font-medium align-middle mx-1 translate-y-[-2px]">
		{icon && <img src={process.env.PUBLIC_URL + icon} alt={name} className="w-4 h-4 object-contain" />}
		<span>{name}</span>
	</span>
);



const InfoItem = ({ icon, text, disabled }) => (
	<div className={`flex items-center gap-3 ${disabled ? "opacity-50" : ""}`}>
		<div className="flex items-center justify-center w-8 h-8 rounded-lg border border-muted bg-muted/50 text-muted-foreground shrink-0">
			{icon}
		</div>
		<span className="text-sm font-medium truncate">{text}</span>
	</div>
);

const SocialCard = ({ icon, name, handle, href }) => (
	<a href={href} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-xl border border-muted bg-card hover:bg-muted/50 transition-colors group text-left">
		<div className="flex items-center gap-4">
			<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted text-foreground group-hover:bg-background transition-colors shrink-0">
				{icon}
			</div>
			<div className="flex flex-col overflow-hidden">
				<span className="text-sm font-semibold leading-none truncate">{name}</span>
				<span className="text-xs text-muted-foreground mt-1 truncate">{handle}</span>
			</div>
		</div>
		<ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
	</a>
);

const TimeDisplay = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => setTime(new Date()), 1000);
		return () => clearInterval(timer);
	}, []);

	// Format time for India (IST)
	const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false };
	const timeString = time.toLocaleTimeString('en-US', options);

	return (
		<span className="font-mono">{timeString} <span className="text-muted-foreground text-xs ml-1">(IST)</span></span>
	);
};

const Home = () => {
	const [displayName, setDisplayName] = useState("शैलेश");
	const [visitCount, setVisitCount] = useState(0);
	const [isForV, setIsForV] = useState(false);
	const { theme, setTheme } = useTheme();
	const location = useLocation();
	const searchParams = useSearchParams()[0]; // Keep useSearchParams for direct access if needed, or remove if location is sufficient
	const hasTracked = useRef(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		// Update isForV based on location.search
		setIsForV(new URLSearchParams(location.search).get("v") === "true");

		const trackVisitor = async () => {
			if (!supabase) return;

			if (hasTracked.current) return;
			hasTracked.current = true;

			try {
				const hasVisited = localStorage.getItem("has_visited_portfolio");

				if (!hasVisited) {
					await supabase.from('visitors').insert([
						{ user_agent: navigator.userAgent, page: 'home' }
					]);
					localStorage.setItem("has_visited_portfolio", "true");
				}

				const { count, error } = await supabase
					.from('visitors')
					.select('*', { count: 'exact', head: true });

				if (!error && count !== null) {
					setVisitCount(count);
				}
			} catch (error) {
				console.error("Error tracking visitor:", error);
			}
		};

		trackVisitor();
	}, []);

	// Name animation logic
	useEffect(() => {
		const names = [

			"শৈলেশ",         // Bengali
			"ਸ਼ੈਲੇਸ਼",          // Punjabi
			"சைலேஷ்",       // Tamil
			"శైలేష్",         // Telugu
			"ଶୈଲେଶ",        // Odia
			"શૈલેષ",          // Gujarati
			"शैलेश",          // Hindi
			"ശൈലേഷ്",       // Malayalam
			"ಶೈಲೇಶ್",         // Kannada
			"Shailesh"        // Final English
		];
		let index = 0;

		const intervalId = setInterval(() => {
			index = (index + 1) % names.length;
			setDisplayName(names[index]);

			// Stop at the last element (English) after one full cycle
			if (index === names.length - 1) {
				clearInterval(intervalId);
			}
		}, 150); // Change every 150ms for faster animation

		return () => clearInterval(intervalId);
	}, []);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2
			}
		}
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { type: "spring", stiffness: 100 }
		}
	};

	return (
		<div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/10">
			{/* Navbar */}
			<nav className="sticky top-0 z-50 w-full backdrop-blur-sm bg-background/80">
				<div className="container max-w-3xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
					<span className="font-semibold text-lg tracking-tight">Shailesh</span>

					<div className="flex items-center gap-6">
						<div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
							<a href="#work" className="hover:text-foreground transition-colors">Work</a>
							<Link to="/blogs" className="hover:text-foreground transition-colors">Blogs</Link>
							<a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
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

							{/* Mobile Menu Button */}
							<Button
								variant="ghost"
								size="icon"
								className="h-9 w-9 md:hidden"
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							>
								<div className="space-y-1.5 w-4">
									<span className={`block w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
									<span className={`block w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
									<span className={`block w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
								</div>
							</Button>
						</div>
					</div>
				</div>

				{/* Mobile Menu */}
				<div className={`md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-sm border-t transition-all duration-300 ${isMobileMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
					<div className="container max-w-3xl mx-auto px-4 py-4 flex flex-col gap-4 text-sm font-medium">
						<a href="#work" className="hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Work</a>
						<Link to="/blogs" className="hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
						<a href="#projects" className="hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
					</div>
				</div>
			</nav>

			<main className="container max-w-3xl mx-auto py-12 px-4 md:px-6 space-y-12">
				{/* Hero Section */}
				<motion.section
					className="space-y-8 mt-8"
					initial="hidden"
					animate="visible"
					variants={containerVariants}
				>
					<div className="space-y-4">
						<motion.div variants={itemVariants} className="relative w-24 h-24">
							<div className="w-24 h-24 rounded-full overflow-hidden border-2 border-background ring-2 ring-muted">
								<img src="/images/profile-pic.jpg" alt="Profile" className="w-full h-full object-cover" />
							</div>
						</motion.div>

						<div className="space-y-6">
							<motion.h1 variants={itemVariants} className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-[1.1]">
								Hi, I'm <div className="inline-block relative text-left">
									<span className="invisible opacity-0 px-1">Shailesh</span>
									<AnimatePresence mode="wait">
										<motion.span
											key={displayName}
											initial={{ opacity: 0, scale: 1.1 }}
											animate={{ opacity: 1, scale: 1 }}
											exit={{ opacity: 0, scale: 0.9 }}
											transition={{ duration: 0.1, ease: "easeInOut" }}
											className="absolute left-0 top-0 whitespace-nowrap text-foreground px-1"
										>
											{displayName}
										</motion.span>
									</AnimatePresence>
								</div>
								<span className="block text-muted-foreground mt-2 text-3xl sm:text-4xl">a Full-Stack Engineer & Product Builder.</span>
							</motion.h1>

							<motion.div variants={itemVariants} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl space-y-4">
								<p>
									I build real-world, scalable web products with a strong focus on
									usability, clean UI, and practical problem-solving.
								</p>
								<div className="leading-normal">
									Currently working with
									<div className="inline-flex flex-wrap gap-2 items-center align-middle mx-1.5">
										<a href="https://angular.io" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-dashed border-border hover:bg-muted/50 hover:border-primary/50 transition-colors text-sm text-foreground no-underline">
											<svg viewBox="0 0 128 128" className="w-4 h-4 object-contain">
												<path fill="#dd0031" d="M64 4L9 23l8 73 47 28 46-28 8-73z"></path>
												<path fill="#c3002f" d="M64 4v120l47-28 8-73z"></path>
												<path fill="#fff" d="M64 24L37 85h11l6-14h20l6 14h11L64 24zm-9 39l9-21 9 21h-18z"></path>
											</svg>
											<span>Angular</span>
										</a>
										<a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-dashed border-border hover:bg-muted/50 hover:border-primary/50 transition-colors text-sm text-foreground no-underline">
											<svg viewBox="0 0 128 128" className="w-4 h-4 rounded-sm">
												<path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
												<path fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z" />
											</svg>
											<span>TypeScript</span>
										</a>
										<a href="https://nodejs.org" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-dashed border-border hover:bg-muted/50 hover:border-primary/50 transition-colors text-sm text-foreground no-underline">
											<svg viewBox="0 0 128 128" className="w-4 h-4 object-contain">
												<path fill="#83CD29" d="M64 9l55 32v64l-55 32-55-32V41L64 9z"></path>
												<path fill="#fff" d="M102 47l-38 21-38-21 38-22 38 22zM26 81l36 21V63L26 42v39zm40 21l36-21V41l-36 22v39z"></path>
												<path fill="#333" d="M100 83v.5a2 2 0 01-1 1.7l-9 5a2 2 0 01-2 0l-9-5a2 2 0 01-1-1.7V83a2 2 0 011-1.8l9-5a2 2 0 012 0l9 5a2 2 0 011 1.8z"></path>
											</svg>
											<span>Node.js</span>
										</a>
										<a href="https://www.mongodb.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-dashed border-border hover:bg-muted/50 hover:border-primary/50 transition-colors text-sm text-foreground no-underline">
											<svg viewBox="0 0 128 128" className="w-4 h-4 object-contain">
												<path fill="#4DB33D" d="M64 120a14 14 0 01-14-17c0-6 14-40 14-40s12 30 12 40a12 12 0 01-12 17z"></path>
												<path fill="#3FA037" d="M64 57s2 23 2 30c0 8 4 17 12 17 8 0 11-7 11-16 0-8-10-33-10-33L64 57z"></path>
												<path fill="#fff" d="M63 85c1-12 1-38 1-38s-11 19-11 36c0 16 5 26 10 26 0 0-1-12 0-24z"></path>
											</svg>
											<span>MongoDB</span>
										</a>
									</div>
									and building <Link to="/blogs/love-akot" className="text-foreground font-medium hover:underline underline-offset-4 decoration-primary inline-block">Love Akot</Link>, a hyperlocal community app for my hometown.
								</div>
								<p>
									Driven by impact, not just code.
								</p>
							</motion.div>

							{/* Info & Social Section */}
							<motion.div variants={itemVariants} className="space-y-8 pt-8">
								{/* Info Grid */}
								<div className="">
									<div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
										<div className="space-y-4">
											<InfoItem icon={<Terminal className="w-4 h-4" />} text="Full-Stack Engineer & Product Builder" />
											<InfoItem icon={<Lightbulb className="w-4 h-4" />} text="Founder @ Love Akot" />
											<InfoItem icon={<MapPin className="w-4 h-4" />} text="Akot, Maharashtra, India" />
										</div>
										<div className="space-y-4">
											<InfoItem icon={<Clock className="w-4 h-4" />} text={<TimeDisplay />} />
											<InfoItem icon={<Mail className="w-4 h-4" />} text={<a href="mailto:shaileshsawale7@gmail.com" className="hover:underline hover:text-primary transition-colors">shaileshsawale7@gmail.com</a>} />
											<InfoItem icon={<User className="w-4 h-4" />} text="he/him" />
										</div>
									</div>
								</div>

								{/* Social Grid */}
								<div className="grid gap-4 sm:grid-cols-2">
									<SocialCard
										icon={<Github className="w-5 h-5 fill-current" />}
										name="GitHub"
										handle="ShaileshS237"
										href="https://github.com/ShaileshS237"
									/>
									<SocialCard
										icon={<Linkedin className="w-5 h-5 fill-current" />}
										name="LinkedIn"
										handle="Shailesh Sawale"
										href="https://www.linkedin.com/in/shaileshsawale/"
									/>
									<SocialCard
										icon={<Instagram className="w-5 h-5" />}
										name="Instagram"
										handle="@shaaaailesh"
										href="https://www.instagram.com/shaaaailesh"
									/>
									<SocialCard
										icon={<div className="w-5 h-5 flex items-center justify-center font-serif font-bold text-lg">M</div>}
										name="Medium"
										handle="@shaileshsawale7"
										href="https://medium.com/@shaileshsawale7"
									/>
								</div>
							</motion.div>
						</div>
					</div>
				</motion.section>


				{/* Work / Experience Section */}
				<section id="work" className="space-y-8">
					<motion.h2
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="text-2xl font-bold tracking-tight"
					>
						Work Experience
					</motion.h2>
					<div className="space-y-8">
						{EXPERIENCE.slice(0, 4).map((exp, index) => (
							<motion.div
								key={exp.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="group relative flex gap-4 transition-all"
							>
								<div className="absolute -left-3 top-0 h-full w-px bg-border group-hover:bg-primary/50 hidden md:block" />
								<div className="relative mt-1 h-3 w-3 rounded-full border border-muted bg-background ring-2 ring-border group-hover:ring-primary hidden md:block" />

								<div className="flex flex-1 flex-col justify-start gap-1">
									<div className="flex items-center justify-between">
										<h3 className="font-semibold">{exp.role}</h3>
										<span className="text-sm text-muted-foreground tabular-nums text-right shrink-0">{exp.date}</span>
									</div>
									<p className="text-sm text-foreground/80 font-medium">{exp.comapny_name} • {exp.location}</p>
									{index === 0 && exp.description && (
										<p className="text-sm text-muted-foreground mt-2 leading-relaxed">
											{exp.description}
										</p>
									)}
								</div>
							</motion.div>
						))}
						<div className="pl-4">
							<Link to="/experience" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4">
								View Full Experience <ArrowUpRight className="w-4 h-4" />
							</Link>
						</div>
					</div>
				</section>

				{/* Projects Section */}
				<section id="projects" className="space-y-8 mb-24">
					<motion.h2
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="text-2xl font-bold tracking-tight"
					>
						Projects
					</motion.h2>
					<div className="grid grid-cols-1 gap-4">
						{PROJECTS.map((project, index) => (
							<motion.div
								key={project.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="group flex flex-col gap-2 rounded-lg border p-4 border-muted hover:bg-muted/50 transition-colors"
							>
								<div className="flex items-center justify-between">
									<h3 className="font-semibold group-hover:underline decoration-primary underline-offset-4">{project.project_name}</h3>
									<div className="flex gap-2">
										{project.href && <a href={project.href} target="_blank" rel="noreferrer"><Github className="w-4 h-4 text-muted-foreground hover:text-foreground" /></a>}
									</div>
								</div>
								<p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
								<div className="flex gap-2 mt-2">
									<Badge variant="secondary" className="text-[10px] px-1.5 py-0 rounded-sm font-normal">{project.type}</Badge>
									<Badge variant="secondary" className="text-[10px] px-1.5 py-0 rounded-sm font-normal">{project.project_type}</Badge>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* GitHub Activity Section */}
				<section className="space-y-6">
					<motion.h2
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="text-2xl font-bold tracking-tight"
					>
						GitHub Activity
					</motion.h2>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="rounded-lg border border-muted bg-card/50 p-4 overflow-hidden"
					>
						<div className="flex flex-col gap-4">
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ delay: 0.2 }}
								className="flex items-center justify-between"
							>
								<p className="text-sm text-muted-foreground">
									Contributions in the last year
								</p>
								<a
									href="https://github.com/ShaileshS237"
									target="_blank"
									rel="noreferrer"
									className="text-xs font-medium text-primary hover:underline inline-flex items-center gap-1"
								>
									View Profile <ArrowUpRight className="w-3 h-3" />
								</a>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: 0.3, duration: 0.5 }}
								className="w-full overflow-x-auto"
							>
								<img
									src="https://ghchart.rshah.org/ShaileshS237"
									alt="GitHub Contribution Graph"
									className="w-full h-auto dark:invert dark:hue-rotate-180"
									loading="lazy"
								/>
							</motion.div>

							{/* Less/More Scale and Stats */}
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ delay: 0.5 }}
								className="flex items-center justify-between text-xs text-muted-foreground pt-2"
							>
								<div className="flex items-center gap-2">
									<span>Less</span>
									<div className="flex gap-1">
										<div className="w-2.5 h-2.5 rounded-sm bg-muted"></div>
										<div className="w-2.5 h-2.5 rounded-sm bg-muted-foreground/20"></div>
										<div className="w-2.5 h-2.5 rounded-sm bg-muted-foreground/40"></div>
										<div className="w-2.5 h-2.5 rounded-sm bg-muted-foreground/60"></div>
										<div className="w-2.5 h-2.5 rounded-sm bg-muted-foreground/80"></div>
									</div>
									<span>More</span>
								</div>
								<a
									href="https://github.com/ShaileshS237?tab=overview"
									target="_blank"
									rel="noreferrer"
									className="hover:text-foreground transition-colors"
								>
									View contribution details →
								</a>
							</motion.div>
						</div>
					</motion.div>
				</section>

				{/* Special Block for V */}
				{isForV && (
					<motion.section
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
						className="rounded-xl border border-pink-200 bg-pink-50/50 dark:bg-pink-950/10 p-8 text-center space-y-4"
					>
						<div className="space-y-2">
							<span className="text-4xl animate-pulse">✨</span>
							<h2 className="text-2xl font-bold tracking-tight text-pink-600 dark:text-pink-400">
								A Special Note for You
							</h2>
						</div>
						<p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
							"Some people make the world more special just by being in it.
							If you are reading this, know that you are one of them."
						</p>
						<div className="pt-4">
							<Badge variant="outline" className="border-pink-200 text-pink-600 dark:border-pink-800 dark:text-pink-400">
								For V Only 🤍
							</Badge>
						</div>
					</motion.section>
				)}

				<div className="py-2" />

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<QuoteSection />
				</motion.div>

				<motion.footer
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="py-1 flex items-center justify-between text-sm text-muted-foreground"
				>
					<p>© {new Date().getFullYear()} Shailesh Sawale.</p>
					<div className="flex items-center gap-4">
						{visitCount > 0 && (
							<div className="flex items-center gap-2">
								<span className="font-medium text-foreground">{visitCount.toLocaleString()}</span>
								<span>visits</span>
							</div>
						)}
						<div className="flex items-center gap-2">
							<span className="w-2 h-2 rounded-full bg-green-500" />
							<span>All systems normal</span>
						</div>
					</div>
				</motion.footer>
			</main>
		</div >
	);
};

export default Home;
