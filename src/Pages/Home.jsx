import { useSearchParams, Link, useLocation } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import { useTheme } from "@/Components/theme-provider";
import QuoteSection from "../Components/QuoteSection";
import Navbar from "@/Components/Navbar";
import TechBadge from "@/Components/TechBadge";
import ExperienceCard from "@/Components/ExperienceCard";
import ProjectCard from "@/Components/ProjectCard";
import InfoItem from "@/Components/InfoItem";
import SocialCard from "@/Components/SocialCard";
import TimeDisplay from "@/Components/TimeDisplay";
import PageContainer from "@/Components/PageContainer";

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

const getSkillDetails = (skill) => {
	const normalize = (s) => s.toLowerCase().replace(/[\s\.]/g, '');
	const key = normalize(skill);

	const db = {
		'reactjs': { url: 'https://react.dev', slug: 'react', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
		'react': { url: 'https://react.dev', slug: 'react', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
		'typescript': { url: 'https://www.typescriptlang.org', slug: 'typescript', color: 'bg-blue-600/10 text-blue-700 dark:text-blue-300 border-blue-600/20' },
		'javascript': { url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', slug: 'javascript', color: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-300 border-yellow-500/20' },
		'nodejs': { url: 'https://nodejs.org', slug: 'nodedotjs', color: 'bg-green-600/10 text-green-700 dark:text-green-400 border-green-600/20' },
		'python': { url: 'https://www.python.org', slug: 'python', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
		'java': { url: 'https://www.java.com', slug: 'openjdk', color: 'bg-red-600/10 text-red-700 dark:text-red-400 border-red-600/20' },
		'flutter': { url: 'https://flutter.dev', slug: 'flutter', color: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20' },
		'dart': { url: 'https://dart.dev', slug: 'dart', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
		'figma': { url: 'https://figma.com', slug: 'figma', color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20' },
		'adobeillustrator': { url: 'https://www.adobe.com/products/illustrator', slug: 'adobeillustrator', color: 'bg-orange-600/10 text-orange-700 dark:text-orange-400 border-orange-600/20' },
		'adobephotoshop': { url: 'https://www.adobe.com/products/photoshop', slug: 'adobephotoshop', color: 'bg-blue-600/10 text-blue-700 dark:text-blue-300 border-blue-600/20' },
		'ionic': { url: 'https://ionicframework.com', slug: 'ionic', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
		'angular': { url: 'https://angular.io', slug: 'angular', color: 'bg-red-600/10 text-red-700 dark:text-red-400 border-red-600/20' },
		'vue': { url: 'https://vuejs.org', slug: 'vuedotjs', color: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20' },
		'vuejs': { url: 'https://vuejs.org', slug: 'vuedotjs', color: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20' },
		'mysql': { url: 'https://www.mysql.com', slug: 'mysql', color: 'bg-blue-600/10 text-blue-700 dark:text-blue-300 border-blue-600/20' },
		'mongodb': { url: 'https://www.mongodb.com', slug: 'mongodb', color: 'bg-green-600/10 text-green-700 dark:text-green-400 border-green-600/20' },
		'postgresql': { url: 'https://www.postgresql.org', slug: 'postgresql', color: 'bg-blue-700/10 text-blue-800 dark:text-blue-300 border-blue-700/20' },
		'firebase': { url: 'https://firebase.google.com', slug: 'firebase', color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20' },
		'git': { url: 'https://git-scm.com', slug: 'git', color: 'bg-orange-600/10 text-orange-700 dark:text-orange-400 border-orange-600/20' },
		'docker': { url: 'https://www.docker.com', slug: 'docker', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
		'kubernetes': { url: 'https://kubernetes.io', slug: 'kubernetes', color: 'bg-blue-600/10 text-blue-700 dark:text-blue-300 border-blue-600/20' },
		'aws': { url: 'https://aws.amazon.com', slug: 'amazonaws', color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20' },
		'tailwindcss': { url: 'https://tailwindcss.com', slug: 'tailwindcss', color: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20' },
		'bootstrap': { url: 'https://getbootstrap.com', slug: 'bootstrap', color: 'bg-purple-600/10 text-purple-700 dark:text-purple-400 border-purple-600/20' },
		'sass': { url: 'https://sass-lang.com', slug: 'sass', color: 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20' },
		'redux': { url: 'https://redux.js.org', slug: 'redux', color: 'bg-purple-600/10 text-purple-700 dark:text-purple-400 border-purple-600/20' },
		'graphql': { url: 'https://graphql.org', slug: 'graphql', color: 'bg-pink-600/10 text-pink-700 dark:text-pink-400 border-pink-600/20' },
		'restapi': { url: 'https://restfulapi.net', iconVal: <Globe className="w-3 h-3" />, color: 'bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20' },
		'html': { url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', slug: 'html5', color: 'bg-orange-600/10 text-orange-700 dark:text-orange-400 border-orange-600/20' },
		'css': { url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', slug: 'css3', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
		'nextjs': { url: 'https://nextjs.org', slug: 'nextdotjs', color: 'bg-gray-800/10 text-gray-900 dark:text-gray-100 border-gray-800/20' },
		'express': { url: 'https://expressjs.com', slug: 'express', color: 'bg-gray-600/10 text-gray-700 dark:text-gray-300 border-gray-600/20' },
		'adobecreativesuite': { url: 'https://www.adobe.com/creativecloud.html', slug: 'adobecreativecloud', color: 'bg-red-600/10 text-red-700 dark:text-red-400 border-red-600/20' },
		'adobexd': { url: 'https://helpx.adobe.com/xd/get-started.html', slug: 'adobexd', color: 'bg-pink-600/10 text-pink-700 dark:text-pink-400 border-pink-600/20' },
		'adobeaudition': { url: 'https://www.adobe.com/products/audition.html', slug: 'adobeaudition', color: 'bg-purple-600/10 text-purple-700 dark:text-purple-400 border-purple-600/20' },
		'adobeaftereffects': { url: 'https://www.adobe.com/products/aftereffects.html', slug: 'adobeaftereffects', color: 'bg-purple-700/10 text-purple-800 dark:text-purple-300 border-purple-700/20' },
		'adobepremierepro': { url: 'https://www.adobe.com/products/premiere.html', slug: 'adobepremierepro', color: 'bg-purple-800/10 text-purple-900 dark:text-purple-300 border-purple-800/20' },
	};

	const match = db[key];
	if (match) {
		return {
			url: match.url,
			icon: match.slug ? <img src={`https://cdn.simpleicons.org/${match.slug}`} alt="" className="w-3 h-3 object-contain dark:invert" /> : match.iconVal,
			color: match.color || 'bg-muted/50 text-muted-foreground border-muted'
		};
	}

	// Generate random color for unknown skills
	const colors = [
		'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
		'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20',
		'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
		'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20',
		'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
		'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
	];
	const randomColor = colors[skill.length % colors.length];

	return {
		url: null,
		icon: <Terminal className="w-3 h-3" />,
		color: randomColor
	};
};

const Home = () => {
	const [displayName, setDisplayName] = useState("शैलेश");
	const [visitCount, setVisitCount] = useState(0);
	const [isForV, setIsForV] = useState(false);
	const { theme, setTheme } = useTheme();
	const location = useLocation();
	const searchParams = useSearchParams()[0]; // Keep useSearchParams for direct access if needed, or remove if location is sufficient
	const hasTracked = useRef(false);

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
		<PageContainer title="Shailesh Sawale | Full-Stack Engineer & Product Builder">
			<Navbar
				backToHome={false}
				title="Shailesh"
				navLinks={[
					{ label: "Work", href: "#work", external: true },
					{ label: "Blogs", href: "/blogs", external: false },
					{ label: "Projects", href: "#projects", external: true },
					{ label: "Gear", href: "/gear", external: false }
				]}
			/>

			<main className="container max-w-3xl mx-auto pt-24 pb-12 px-4 md:px-6 space-y-12">
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
								Hi, I'm <Link to="/" className="inline-block relative text-left group/name">
									<span className="invisible px-1">Shailesh</span>
									<AnimatePresence mode="wait">
										<motion.span
											key={displayName}
											initial={{ scale: 1 }}
											animate={{ scale: 1 }}
											exit={{ scale: 1 }}
											transition={{ duration: 0.05, ease: "easeInOut" }}
											className="absolute left-0 top-0 whitespace-nowrap text-foreground px-1 group-hover/name:text-primary transition-colors cursor-pointer"
										>
											{displayName}
										</motion.span>
									</AnimatePresence>
								</Link>
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
										{['Angular', 'TypeScript', 'Node.js', 'MongoDB'].map((tech) => {
											const { url, icon, color } = getSkillDetails(tech);
											return (
												<TechBadge
													key={tech}
													skill={tech}
													url={url}
													icon={icon}
													color={color}
													variant="default"
												/>
											);
										})}
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
				<section id="work" className="space-y-8 scroll-mt-20">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="flex items-center justify-between"
					>
						<h2 className="text-2xl font-bold tracking-tight">Work Experience</h2>
						<Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex items-center gap-1.5 text-primary hover:text-primary hover:bg-primary/10">
							<Link to="/experience">
								View All <ArrowUpRight className="w-3.5 h-3.5" />
							</Link>
						</Button>
					</motion.div>

					<div className="space-y-12">
						{EXPERIENCE.filter(exp => exp.type === 'technical').slice(0, 3).map((exp, index) => (
							<ExperienceCard
								key={exp.id}
								exp={exp}
								index={index}
								getSkillDetails={getSkillDetails}
								variant="compact"
								initiallyExpanded={index === 0}
							/>
						))}
					</div>

				</section>

				{/* Projects Section */}
				<section id="projects" className="space-y-8 mb-12 scroll-mt-20">
					<motion.h2
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="text-2xl font-bold tracking-tight"
					>
						Projects
					</motion.h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{PROJECTS.slice(0, 4).map((project, index) => (
							<ProjectCard key={project.id} project={project} index={index} />
						))}
					</div>
				</section>

				{/* GitHub Activity Section */}
				<section className="space-y-6">
					<motion.h2
						initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
						whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						className="text-2xl font-bold tracking-tight"
					>
						GitHub Activity
					</motion.h2>
					<motion.div
						initial={{ opacity: 0, y: 40, scale: 0.95 }}
						whileInView={{ opacity: 1, y: 0, scale: 1 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
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
					initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
					whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					viewport={{ once: true, margin: "-30px" }}
					transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
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
		</PageContainer >
	);
};

export default Home;
