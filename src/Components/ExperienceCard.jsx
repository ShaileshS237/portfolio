import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import TechBadge from "@/Components/TechBadge";

const ExperienceCard = ({ exp, index, getSkillDetails, variant = "default", initiallyExpanded = false, isCollapsible = true }) => {
    const [isExpanded, setIsExpanded] = React.useState(initiallyExpanded);
    const showBullets = variant === "compact";
    const techBadgeVariant = "default";
    const dotTopPosition = variant === "compact" ? "top-1.5" : "top-[0.5rem]";

    // If not collapsible, we force expanded state
    const effectiveIsExpanded = isCollapsible ? isExpanded : true;

    return (
        <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 md:pl-0"
        >
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-[149px] top-2 bottom-[-48px] w-px bg-border last:bottom-0 last:h-auto"></div>

            <div className="md:grid md:grid-cols-[150px_1fr] md:gap-8 items-start">
                {/* Date Column */}
                <div className="text-sm text-muted-foreground font-medium pt-1.5 mb-2 md:mb-0 relative md:text-right md:pr-4">
                    {/* Dot */}
                    <div className={`hidden md:block absolute right-[-5px] ${dotTopPosition} w-2.5 h-2.5 rounded-full border-2 border-primary bg-background z-10 transition-colors duration-300`}></div>
                    {exp.date}
                </div>

                {/* Content Column */}
                <div className="flex flex-col gap-3 group">
                    <div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <h2 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                                {exp.role}
                            </h2>
                            {exp.date.includes('Present') && (
                                <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20 hover:bg-green-500/20 text-xs font-medium px-2 py-0.5">
                                    Working
                                </Badge>
                            )}
                        </div>
                        <div className="flex items-center gap-2 text-foreground/80 mt-1 font-medium">
                            <span>{exp.comapny_name}</span>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-muted-foreground text-sm">{exp.location}</span>
                        </div>
                    </div>

                    {exp.description && (
                        <div className="space-y-2">
                            {(isCollapsible && variant === "compact") && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="h-8 px-2 text-primary hover:text-primary hover:bg-primary/10 -ml-2 gap-1 text-xs font-medium"
                                >
                                    {isExpanded ? (
                                        <>Hide Description <ChevronUp className="w-3 h-3" /></>
                                    ) : (
                                        <>Show Description <ChevronDown className="w-3 h-3" /></>
                                    )}
                                </Button>
                            )}

                            {(effectiveIsExpanded || (variant !== "compact")) && (
                                <div className="overflow-hidden">
                                    <motion.div
                                        initial={false}
                                        animate={{ height: "auto", opacity: 1 }}
                                        className="text-muted-foreground leading-relaxed"
                                    >
                                        {showBullets ? (
                                            <ul className="space-y-2 list-none">
                                                {exp.description.split(/(?<=[.!?])\s+(?=[A-Z])/).filter(sentence => sentence.trim()).map((sentence, idx) => (
                                                    <li key={idx} className="flex gap-3">
                                                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-muted-foreground mt-[0.5em]"></span>
                                                        <span>{sentence.trim()}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>{exp.description}</p>
                                        )}
                                    </motion.div>
                                </div>
                            )}
                        </div>
                    )}

                    {exp.skills && exp.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                            {exp.skills.map((skill) => {
                                const { url, icon, color } = getSkillDetails(skill);
                                return (
                                    <TechBadge
                                        key={skill}
                                        skill={skill}
                                        url={url}
                                        icon={icon}
                                        color={color}
                                        variant={techBadgeVariant}
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ExperienceCard;
