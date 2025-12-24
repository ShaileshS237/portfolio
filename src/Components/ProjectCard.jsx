import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import ViewButton from "@/Components/ViewButton";
import {
    ArrowUpRight,
    Github,
    ExternalLink,
    Smartphone,
    Globe,
    Cpu,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

// Tech icon mapping with Simple Icons (real logos) and colors
const techIcons = {
    react: { slug: "react", color: "text-cyan-400", bg: "bg-cyan-500/10" },
    reactjs: { slug: "react", color: "text-cyan-400", bg: "bg-cyan-500/10" },
    "react native": { slug: "react", color: "text-cyan-400", bg: "bg-cyan-500/10" },
    angular: { slug: "angular", color: "text-red-400", bg: "bg-red-500/10" },
    ionic: { slug: "ionic", color: "text-blue-400", bg: "bg-blue-500/10" },
    "ionic capacitor": { slug: "capacitor", color: "text-blue-400", bg: "bg-blue-500/10" },
    capacitor: { slug: "capacitor", color: "text-blue-400", bg: "bg-blue-500/10" },
    flutter: { slug: "flutter", color: "text-sky-400", bg: "bg-sky-500/10" },
    "node.js": { slug: "nodedotjs", color: "text-green-400", bg: "bg-green-500/10" },
    nodejs: { slug: "nodedotjs", color: "text-green-400", bg: "bg-green-500/10" },
    express: { slug: "express", color: "text-zinc-400", bg: "bg-zinc-500/10" },
    mongodb: { slug: "mongodb", color: "text-emerald-400", bg: "bg-emerald-500/10" },
    mysql: { slug: "mysql", color: "text-blue-400", bg: "bg-blue-500/10" },
    firebase: { slug: "firebase", color: "text-amber-400", bg: "bg-amber-500/10" },
    "firebase cloud messaging": { slug: "firebase", color: "text-amber-400", bg: "bg-amber-500/10" },
    fcm: { slug: "firebase", color: "text-amber-400", bg: "bg-amber-500/10" },
    aws: { slug: "amazonaws", color: "text-orange-400", bg: "bg-orange-500/10" },
    "aws ec2": { slug: "amazonec2", color: "text-orange-400", bg: "bg-orange-500/10" },
    "aws s3": { slug: "amazons3", color: "text-orange-400", bg: "bg-orange-500/10" },
    razorpay: { slug: "razorpay", color: "text-indigo-400", bg: "bg-indigo-500/10" },
    tailwind: { slug: "tailwindcss", color: "text-cyan-400", bg: "bg-cyan-500/10" },
    tailwindcss: { slug: "tailwindcss", color: "text-cyan-400", bg: "bg-cyan-500/10" },
    typescript: { slug: "typescript", color: "text-blue-500", bg: "bg-blue-500/10" },
    javascript: { slug: "javascript", color: "text-yellow-400", bg: "bg-yellow-500/10" },
    python: { slug: "python", color: "text-blue-400", bg: "bg-blue-500/10" },
    nextjs: { slug: "nextdotjs", color: "text-zinc-400", bg: "bg-zinc-500/10" },
    "next.js": { slug: "nextdotjs", color: "text-zinc-400", bg: "bg-zinc-500/10" },
    vue: { slug: "vuedotjs", color: "text-green-400", bg: "bg-green-500/10" },
    vuejs: { slug: "vuedotjs", color: "text-green-400", bg: "bg-green-500/10" },
    docker: { slug: "docker", color: "text-blue-400", bg: "bg-blue-500/10" },
    graphql: { slug: "graphql", color: "text-pink-400", bg: "bg-pink-500/10" },
    redis: { slug: "redis", color: "text-red-400", bg: "bg-red-500/10" },
    postgresql: { slug: "postgresql", color: "text-blue-400", bg: "bg-blue-500/10" },
    supabase: { slug: "supabase", color: "text-emerald-400", bg: "bg-emerald-500/10" },
    vercel: { slug: "vercel", color: "text-zinc-400", bg: "bg-zinc-500/10" },
    git: { slug: "git", color: "text-orange-400", bg: "bg-orange-500/10" },
    github: { slug: "github", color: "text-zinc-400", bg: "bg-zinc-500/10" },
    figma: { slug: "figma", color: "text-purple-400", bg: "bg-purple-500/10" },
    otpless: { slug: null, color: "text-violet-400", bg: "bg-violet-500/10" },
    default: { slug: null, color: "text-muted-foreground", bg: "bg-muted/50" },
};

const getTechIcon = (techName) => {
    const normalizedName = techName.toLowerCase().trim();
    return techIcons[normalizedName] || techIcons.default;
};

// Tech Icon Component using Simple Icons CDN
const TechIcon = ({ tech, size = "sm" }) => {
    const { slug, color, bg } = getTechIcon(tech);
    const sizeClass = size === "lg" ? "w-5 h-5" : "w-4 h-4";
    const paddingClass = size === "lg" ? "p-2.5" : "p-2";

    return (
        <div
            className={`${paddingClass} rounded-xl ${bg} border border-border/30 transition-all duration-300 `}
            title={tech}
        >
            {slug ? (
                <img
                    src={`https://cdn.simpleicons.org/${slug}`}
                    alt={tech}
                    className={`${sizeClass} object-contain dark:invert`}
                />
            ) : (
                <Cpu className={`${sizeClass} ${color}`} />
            )}
        </div>
    );
};

// Extract tech stack from description
const extractTechStack = (description) => {
    if (!description) return [];
    const techMatch = description.match(/Tech Stack:([^.]+)/i);
    if (techMatch) {
        return techMatch[1].split(",").map((tech) => tech.trim()).filter(Boolean).slice(0, 6);
    }
    const keywords = ["Angular", "Ionic", "React", "Node.js", "Express", "MongoDB", "MySQL", "Firebase", "AWS"];
    return keywords.filter((k) => description.toLowerCase().includes(k.toLowerCase())).slice(0, 6);
};

// Paragon-style Bento Card Component
const ProjectCard = ({ project, index = 0, size = "normal" }) => {
    const techStack = project.techStack || extractTechStack(project.description);
    const isLarge = size === "large";
    const isWide = size === "wide";
    const isTall = size === "tall";
    const isFeatured = isLarge || isWide || isTall;

    const getDescription = (desc) => {
        if (!desc) return "";
        const cleanDesc = desc.replace(/Tech Stack:[^.]+\.?/i, "").trim();
        const maxLen = isFeatured ? 180 : 100;
        const firstPart = cleanDesc.split(".").slice(0, 2).join(". ");
        return firstPart.length > maxLen ? firstPart.substring(0, maxLen) + "..." : firstPart + ".";
    };

    const primaryLink = project.website || project.livelink || project.href || "#";

    // Paragon-style gradient backgrounds based on card position
    const getGradientStyle = () => {
        const gradients = [
            "from-violet-500/5 via-transparent to-transparent",
            "from-cyan-500/5 via-transparent to-transparent",
            "from-amber-500/5 via-transparent to-transparent",
            "from-emerald-500/5 via-transparent to-transparent",
            "from-rose-500/5 via-transparent to-transparent",
            "from-blue-500/5 via-transparent to-transparent",
        ];
        return gradients[index % gradients.length];
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
            }}
            className={`
                ${isLarge ? "md:col-span-2 md:row-span-2" : ""}
                ${isWide ? "md:col-span-2" : ""}
                ${isTall ? "md:row-span-2" : ""}
            `}
        >
            <a
                href={primaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full group"
            >
                <Card className={`
                    relative h-full overflow-hidden
                    rounded-xl border border-muted shadow-none
                    bg-gradient-to-br from-card/80 via-card to-card/90
                    transition-all duration-700 ease-out
                    ${isFeatured ? "p-8 md:p-10" : "p-6 md:p-7"}
                `}>
                    {/* Animated gradient orbs - Paragon style */}
                    <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${getGradientStyle()} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                    <div className={`absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 delay-100`} />

                    {/* Subtle border glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Content */}
                    <CardContent className="relative z-10 p-0 h-full flex flex-col">
                        {/* Header with tech icons and arrow */}
                        <div className="flex items-start justify-between mb-6">
                            {/* Tech Stack Icons Row */}
                            <div className="flex items-center gap-2 flex-wrap">
                                {techStack.slice(0, isFeatured ? 5 : 3).map((tech, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2 + i * 0.05 }}
                                    >
                                        <TechIcon tech={tech} size={isFeatured ? "lg" : "sm"} />
                                    </motion.div>
                                ))}
                                {techStack.length > (isFeatured ? 5 : 3) && (
                                    <span className="text-xs text-muted-foreground px-2 py-1 rounded-lg bg-muted/30">
                                        +{techStack.length - (isFeatured ? 5 : 3)}
                                    </span>
                                )}
                            </div>

                            {/* Arrow indicator */}
                            <div className="shrink-0 p-2.5 rounded-full bg-muted/30 border border-border/30 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:rotate-45 group-hover:scale-110">
                                <ArrowUpRight className={isFeatured ? "w-5 h-5" : "w-4 h-4"} />
                            </div>
                        </div>

                        {/* Title & Content */}
                        <div className="flex-1">
                            <h3 className={`
                                font-bold leading-tight mb-3
                                ${isFeatured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}
                                group-hover:text-primary transition-colors duration-300
                            `}>
                                {project.project_name}
                            </h3>

                            {/* Project Type Badge */}
                            <div className="flex items-center gap-2 mb-4 flex-wrap">
                                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground px-3 py-1.5 bg-muted/50 rounded-full border border-border/30">
                                    {project.type === "Mobile App" ? (
                                        <Smartphone className="w-3.5 h-3.5" />
                                    ) : (
                                        <Globe className="w-3.5 h-3.5" />
                                    )}
                                    {project.type}
                                </span>
                                {project.project_type && (
                                    <span className="text-xs font-medium text-muted-foreground px-3 py-1.5 bg-muted/50 rounded-full border border-border/30">
                                        {project.project_type}
                                    </span>
                                )}
                            </div>

                            {/* Description */}
                            <p className={`
                                text-muted-foreground leading-relaxed
                                ${isFeatured ? "text-base md:text-lg line-clamp-4" : "text-sm line-clamp-3"}
                            `}>
                                {getDescription(project.description)}
                            </p>
                        </div>

                        {/* Action Links - Paragon style */}
                        <div className="flex items-center justify-between gap-3 mt-auto pt-6">
                            <div className="flex items-center gap-2">
                                {project.href && (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="gap-2 text-muted-foreground hover:text-foreground rounded-full px-4 h-9 border border-border/30 hover:border-border hover:bg-muted/50"
                                        asChild
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <a href={project.href} target="_blank" rel="noopener noreferrer">
                                            <Github className="w-4 h-4" />
                                            <span className="hidden sm:inline">Source</span>
                                        </a>
                                    </Button>
                                )}
                            </div>
                            <ViewButton>
                                View project
                            </ViewButton>
                        </div>
                    </CardContent>
                </Card>
            </a>
        </motion.div>
    );
};

export default ProjectCard;

