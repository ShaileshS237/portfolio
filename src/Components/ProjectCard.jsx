import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/Components/ui/card";
import ViewButton from "@/Components/ViewButton";
import Tooltip from "@/Components/Tooltip";
import { useNavigate } from "react-router-dom";
import { TECH_ICONS, TECH_KEYWORDS, PROJECT_STATUS_CONFIG, BENTO_GRADIENTS } from "@/constants";
import {
    ArrowUpRight,
    Github,
    Smartphone,
    Globe,
    Cpu,
    Circle,
    Play,
    ChevronRight,
    ChevronLeft,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

const getTechIcon = (techName) => {
    const normalizedName = techName.toLowerCase().trim();
    return TECH_ICONS[normalizedName] || TECH_ICONS.default;
};

// Tech Icon Component using Simple Icons CDN
const TechIcon = ({ tech, size = "sm", index = 0, isNew = false }) => {
    const { slug, color, bg } = getTechIcon(tech);
    const sizeClass = size === "lg" ? "w-5 h-5" : "w-4 h-4";
    const paddingClass = size === "lg" ? "p-2.5" : "p-2";

    // Only invert monochrome icons (zinc/gray/white/black) in dark mode
    // Colored icons (red, blue, green, etc.) should use their original color via brightness-100
    const isMonochrome = color.includes("zinc") || color.includes("slate") || color.includes("gray") || color.includes("white") || color.includes("black");

    return (
        <Tooltip content={tech}>
            <motion.div
                initial={isNew ? { opacity: 0, scale: 0 } : false}
                animate={isNew ? { opacity: 1, scale: 1 } : {}}
                transition={{
                    duration: 0.15,
                    delay: isNew ? index * 0.03 : 0,
                    ease: [0.34, 1.56, 0.64, 1]
                }}
                className={`${paddingClass} rounded-xl ${bg} border-2 border-border/30 transition-all duration-300 `}
            >
                {slug ? (
                    <img
                        src={`https://cdn.simpleicons.org/${slug}`}
                        alt={tech}
                        className={`${sizeClass} object-contain ${color} brightness-0 dark:brightness-100 ${isMonochrome ? "dark:invert" : ""}`}
                        style={{ filter: 'contrast(1.2)' }}
                    />
                ) : (
                    <Cpu className={`${sizeClass} ${color}`} />
                )}
            </motion.div>
        </Tooltip>
    );
};

// Extract tech stack from description
const extractTechStack = (description) => {
    if (!description) return [];
    const techMatch = description.match(/Tech Stack:([^.]+)/i);
    if (techMatch) {
        return techMatch[1].split(",").map((tech) => tech.trim()).filter(Boolean).slice(0, 6);
    }
    return TECH_KEYWORDS.filter((k) => description.toLowerCase().includes(k.toLowerCase())).slice(0, 6);
};

// Status badge configuration
const getStatusConfig = (status) => {
    return PROJECT_STATUS_CONFIG[status] || { label: "Unknown", color: "bg-muted text-muted-foreground border-border" };
};

// Paragon-style Bento Card Component
const ProjectCard = ({ project, index = 0, size = "normal", showVideo = true }) => {
    const navigate = useNavigate();
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [expandedTech, setExpandedTech] = useState(false);
    const techStack = project.techStack || extractTechStack(project.description);
    const isLarge = size === "large";
    const isWide = size === "wide";
    const isTall = size === "tall";
    const isFeatured = isLarge || isWide || isTall;
    const statusConfig = getStatusConfig(project.status);

    const getDescription = (desc) => {
        if (!desc) return "";
        const cleanDesc = desc.replace(/Tech Stack:[^.]+\.?/i, "").trim();
        const maxLen = isFeatured ? 180 : 100;
        const firstPart = cleanDesc.split(".").slice(0, 2).join(". ");
        return firstPart.length > maxLen ? firstPart.substring(0, maxLen) + "..." : firstPart + ".";
    };

    const primaryLink = project.website || project.livelink || project.href || "";

    // Paragon-style gradient backgrounds based on card position
    const getGradientStyle = () => {
        return BENTO_GRADIENTS[index % BENTO_GRADIENTS.length];
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
            <div
                className="block h-full group"
                role="button"
                tabIndex={0}
                onClick={() => navigate(`/project-detail/${project.id}`)}
                onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        navigate(`/project-detail/${project.id}`);
                    }
                }}
            >
                <Card className={`
                    relative h-full overflow-hidden
                    rounded-xl border-2 border-muted shadow-none
                    bg-gradient-to-br from-card/80 via-card to-card/90
                    transition-all duration-700 ease-out
                    ${isFeatured ? "p-8 md:p-10" : "p-6 md:p-7"}
                `}>
                    {/* Animated gradient orbs - Paragon style */}
                    <div className={`absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-tl ${getGradientStyle()} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                    <div className={`absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 delay-100`} />

                    {/* Subtle border glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-tl from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Content */}
                    <CardContent className="relative z-10 p-0 h-full flex flex-col">
                        {/* Header with project logo and arrow */}
                        <div className="flex items-center justify-between mb-6">
                            {/* Project Logo */}
                            {project.icon && (
                                <div className="w-28 h-12 flex items-center justify-center shrink-0">
                                    <img
                                        src={project.icon}
                                        alt={project.project_name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            )}

                            {/* Arrow indicator with View Project text */}
                            <div className="shrink-0 flex items-center px-2 py-1.5 rounded-full bg-muted/30 border-2 border-border/30 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-500 ease-out ml-auto">
                                <span className="text-xs font-medium max-w-0 overflow-hidden opacity-0 group-hover:max-w-32 group-hover:opacity-100 whitespace-nowrap transition-all duration-500 ease-out">
                                    <span className="pl-1 pr-1">View More</span>
                                </span>
                                <div className="p-1 group-hover:rotate-45 transition-transform duration-500 ease-out">
                                    <ArrowUpRight className={isFeatured ? "w-4 h-4" : "w-3.5 h-3.5"} />
                                </div>
                            </div>
                        </div>

                        {/* Title & Content */}
                        <div className="flex-1 flex flex-col">
                            <h3 className={`
                                font-bold leading-tight mb-3
                                ${isFeatured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}
                                group-hover:text-primary transition-colors duration-300
                           `}>
                                {project.project_name}
                            </h3>

                            {/* Project Type Badge */}
                            <div className="flex items-center gap-2 mb-4 flex-wrap">
                                {project.status && (
                                    <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border-2 ${statusConfig.color}`}>
                                        <Circle className="w-2 h-2 fill-current" />
                                        {statusConfig.label}
                                    </span>
                                )}
                                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground px-3 py-1.5 bg-muted/50 rounded-full border-2 border-border/30">
                                    {project.type === "Mobile App" ? (
                                        <Smartphone className="w-3.5 h-3.5" />
                                    ) : (
                                        <Globe className="w-3.5 h-3.5" />
                                    )}
                                    {project.type}
                                </span>
                                {project.project_type && (
                                    <span className="text-xs font-medium text-muted-foreground px-3 py-1.5 bg-muted/50 rounded-full border-2 border-border/30">
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

                            {/* Tech icons under description */}
                            <div
                                className="flex items-center gap-1.5 flex-wrap mt-4"
                                onMouseEnter={() => setExpandedTech(true)}
                                onMouseLeave={() => setExpandedTech(false)}
                            >
                                {(expandedTech ? techStack : techStack.slice(0, isFeatured ? 4 : 3)).map((tech, i) => {
                                    const isNewIcon = expandedTech && i >= (isFeatured ? 4 : 3);
                                    return (
                                        <TechIcon
                                            key={i}
                                            tech={tech}
                                            size="sm"
                                            index={i - (isFeatured ? 4 : 3)}
                                            isNew={isNewIcon}
                                        />
                                    );
                                })}
                                {techStack.length > (isFeatured ? 4 : 3) && !expandedTech && (
                                    <div className="px-2 py-2 rounded-xl bg-muted/30 transition-all border-2 border-border/30 flex items-center gap-1 overflow-hidden">
                                        <span className="text-xs text-muted-foreground font-medium">
                                            +{techStack.length - (isFeatured ? 4 : 3)} More
                                        </span>

                                    </div>
                                )}
                            </div>

                            {showVideo && project.id === 1 && (
                                <div className="mt-4 w-full">
                                    {project.videoLink ? (
                                        <div
                                            className="aspect-video w-full overflow-hidden rounded-lg border-2 border-border/50 bg-black/60 cursor-pointer group/video relative"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setShowVideoModal(true);
                                            }}
                                        >
                                            <img
                                                src="loveakot_webiste.png"
                                                alt="Video thumbnail"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/60 transition-colors flex items-center justify-center">
                                                <div className="w-16 h-16 rounded-full bg-primary/90 group-hover/video:bg-primary flex items-center justify-center transition-all group-hover/video:scale-110">
                                                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="aspect-video w-full rounded-lg border-2 border-dashed border-border/60 bg-gradient-to-br from-muted/40 to-muted/20 flex flex-col items-center justify-center gap-3 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,120,120,0.1),transparent_50%)]" />
                                            <img
                                                src="loveakot_webiste.png"
                                                alt="Placeholder"
                                                className="absolute inset-0 w-full h-full object-cover opacity-20"
                                            />
                                            <div className="relative z-10 flex flex-col items-center gap-3">
                                                <div className="w-16 h-16 rounded-full bg-muted/60 border-2 border-border/40 flex items-center justify-center">
                                                    <Play className="w-8 h-8 text-muted-foreground" />
                                                </div>
                                                <p className="text-sm font-medium text-muted-foreground">Demo video coming soon</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Action Links - Paragon style */}
                        <div className="flex items-center justify-end gap-2 mt-auto pt-6 w-full">
                            {project.href && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="gap-2 text-muted-foreground hover:text-foreground rounded-full px-4 h-9 border-2 border-border/30 hover:border-border hover:bg-muted/50"
                                    asChild
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <a href={project.href} target="_blank" rel="noopener noreferrer">
                                        <Github className="w-4 h-4" />
                                        <span className="hidden sm:inline">Source</span>
                                    </a>
                                </Button>
                            )}

                            {primaryLink && (
                                <ViewButton
                                    href={primaryLink}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    View Website
                                </ViewButton>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Video Modal */}
            {showVideoModal && project.videoLink && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowVideoModal(false);
                    }}
                >
                    <div
                        className="relative w-full max-w-5xl mx-4 aspect-video rounded-xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowVideoModal(false);
                            }}
                            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                        >
                            ✕
                        </button>
                        <iframe
                            title={`${project.project_name} demo video`}
                            src={project.videoLink.replace('watch?v=', 'embed/').split('&')[0]}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default ProjectCard;

