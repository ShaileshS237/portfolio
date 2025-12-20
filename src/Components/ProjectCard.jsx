import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { ArrowUpRight, Github, Globe } from "lucide-react";

import Tooltip from "@/Components/Tooltip";

const ProjectCard = ({ project, index = 0, variant = "default" }) => {
    const primaryLink = project.website || project.livelink || project.href || "#";

    // Extract tech tags from description if not provided in project
    const getTechTags = () => {
        if (project.techStack) return project.techStack;
        // Simple heuristic: find "Tech Stack:" in description or common keywords
        const keywords = ['Angular', 'Ionic', 'React', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'Firebase', 'Flutter', 'Next.js', 'TypeScript', 'Tailwind', 'AWS'];
        const tags = keywords.filter(k => project.description.includes(k));
        return tags.slice(0, 4);
    };

    const techTags = getTechTags();

    if (variant === "compact") {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col gap-2 rounded-lg border p-4 hover:bg-muted/50 transition-colors bg-card/50"
            >
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold group-hover:underline decoration-primary underline-offset-4 line-clamp-1">
                        {project.project_name}
                    </h2>
                    <div className="flex gap-2 shrink-0">
                        {project.href && (
                            <Tooltip content="Source Code">
                                <a href={project.href} target="_blank" rel="noreferrer" className="p-1 hover:text-primary transition-colors">
                                    <Github className="w-4 h-4" />
                                </a>
                            </Tooltip>
                        )}
                        <Tooltip content="View Project">
                            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </Tooltip>
                    </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary" className="text-[10px] px-1.5 py-0 rounded-sm font-normal">
                        {project.type}
                    </Badge>
                    {project.status === "2" ? (
                        <Badge className="text-[10px] px-1.5 py-0 rounded-sm font-medium bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">
                            Completed
                        </Badge>
                    ) : (
                        <Badge className="text-[10px] px-1.5 py-0 rounded-sm font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20">
                            Working
                        </Badge>
                    )}
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-full flex flex-col rounded-xl border border-muted bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/20 overflow-hidden"
        >
            {/* Project Image */}
            <div className="aspect-[16/9] w-full relative overflow-hidden bg-muted/30">
                <img
                    src={project.icon || '/images/projects/placeholder.png'}
                    alt={project.project_name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop';
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-3">
                        {project.href && (
                            <Tooltip content="Source Code">
                                <a href={project.href} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors">
                                    <Github className="w-4 h-4 text-white" />
                                </a>
                            </Tooltip>
                        )}
                        {project.livelink && (
                            <Tooltip content="Live Demo">
                                <a href={project.livelink} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors">
                                    <Globe className="w-4 h-4 text-white" />
                                </a>
                            </Tooltip>
                        )}
                    </div>
                </div>
            </div>

            <div className="p-5 flex flex-col flex-1 space-y-3">
                <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                                {project.project_name}
                            </h3>
                            {project.status === "2" ? (
                                <Badge className="text-[10px] px-1.5 py-0 rounded-sm font-medium bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">
                                    Completed
                                </Badge>
                            ) : (
                                <Badge className="text-[10px] px-1.5 py-0 rounded-sm font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20">
                                    Working
                                </Badge>
                            )}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{project.project_type}</span>
                            <span>•</span>
                            <span>{project.type}</span>
                        </div>
                    </div>
                    <Tooltip content="Visit Link">
                        <a href={primaryLink} target="_blank" rel="noreferrer" className="shrink-0 p-2 rounded-lg hover:bg-muted transition-colors">
                            <ArrowUpRight className="w-5 h-5" />
                        </a>
                    </Tooltip>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-2 mt-auto">
                    {techTags.map(tag => (
                        <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;

