import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { ArrowUpRight, Github, Globe } from "lucide-react";

const ProjectCard = ({ project, index = 0, variant = "default" }) => {
    const primaryLink = project.livelink || project.href || "#";

    if (variant === "compact") {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col gap-2 rounded-lg border p-4 hover:bg-muted/50 transition-colors"
            >
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold group-hover:underline decoration-primary underline-offset-4">
                        {project.project_name}
                    </h3>
                    <div className="flex gap-2">
                        {project.href && (
                            <a href={project.href} target="_blank" rel="noreferrer">
                                <Github className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                            </a>
                        )}
                    </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                </p>
                <div className="flex gap-2 mt-2">
                    <Badge variant="secondary" className="text-[10px] px-1.5 py-0 rounded-sm font-normal">
                        {project.type}
                    </Badge>
                    <Badge variant="secondary" className="text-[10px] px-1.5 py-0 rounded-sm font-normal">
                        {project.project_type}
                    </Badge>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="h-full"
        >
            <a href={primaryLink} target="_blank" rel="noreferrer" className="group block h-full">
                <Card className="transition-all duration-300 hover:bg-muted/50 h-full hover:border-primary/50 relative overflow-hidden">
                    <CardContent className="p-5 space-y-3 flex flex-col h-full">
                        <div className="flex items-start justify-between">
                            <div className="space-y-1 flex-1">
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

                        {project.href && (
                            <div className="flex items-center gap-2 pt-2">
                                <div className="flex items-center gap-2">
                                    <div className="p-1.5 rounded-md hover:bg-background text-muted-foreground hover:text-foreground transition-colors">
                                        <Github className="w-4 h-4" />
                                    </div>
                                    {project.livelink && (
                                        <div className="p-1.5 rounded-md hover:bg-background text-muted-foreground hover:text-foreground transition-colors">
                                            <Globe className="w-4 h-4" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </a>
        </motion.div>
    );
};

export default ProjectCard;
