import React from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { Building2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Components/ui/card";
import TechBadge from "@/Components/TechBadge";

const ExperienceItem = ({ exp, index, total, scrollProgress, getSkillDetails }) => {
    const denominator = Math.max(total - 1, 1);
    const activationPoint = total === 1 ? 0 : index / denominator;
    const start = Math.max(0, activationPoint - 0.18);
    const end = Math.min(1, activationPoint + 0.02);

    const active = useTransform(scrollProgress, [start, end], [0, 1], { clamp: true });
    const activeSpring = useSpring(active, { stiffness: 180, damping: 22, mass: 0.25 });

    const dotScale = useTransform(activeSpring, [0, 1], [0.7, 1.2]);
    const dotBg = useTransform(activeSpring, [0, 1], ["hsl(var(--muted-foreground))", "hsl(var(--primary))"]);
    const dotShadow = useTransform(activeSpring, (v) => `0 0 0 ${12 * v}px rgba(59,130,246,0.25)`);

    const cardOpacity = useTransform(activeSpring, [0, 1], [0.4, 1]);
    const cardY = useTransform(activeSpring, [0, 1], [20, 0]);

    const isCurrent = exp.date?.toLowerCase().includes("present");

    return (
        <div className="relative pl-10 md:pl-16">
            <motion.div
                aria-hidden="true"
                className="absolute left-1 md:left-2 top-4 w-3 h-3 rounded-full border border-background/70 dark:border-foreground/10"
                style={{ scale: dotScale, backgroundColor: dotBg, boxShadow: dotShadow }}
            />

            <motion.div
                style={{ opacity: cardOpacity, y: cardY }}
                transition={{ type: "spring", stiffness: 140, damping: 16 }}
            >
                <Card className="border-border/60 bg-card/80 backdrop-blur">
                    <CardHeader className="pb-3">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-muted-foreground">
                            <span className="font-semibold text-primary">{exp.date}</span>
                            <span className="text-border">•</span>
                            <span className="inline-flex items-center gap-1 text-muted-foreground">
                                {exp.location}
                            </span>
                        </div>
                        <CardTitle className="text-lg md:text-xl flex flex-wrap gap-2 items-start">
                            <span>{exp.role}</span>
                            {isCurrent && (
                                <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
                                    Present
                                </span>
                            )}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2 text-sm text-foreground/80">
                            <Building2 className="h-4 w-4 text-muted-foreground" />
                            <span>{exp.comapny_name}</span>
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4 pt-0">
                        {exp.description && (
                            <motion.p
                                className="text-sm leading-relaxed text-muted-foreground"
                                initial={false}
                                style={{ opacity: cardOpacity }}
                            >
                                {exp.description}
                            </motion.p>
                        )}

                        {exp.skills && exp.skills.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill) => {
                                    const { url, icon, color } = getSkillDetails ? getSkillDetails(skill) : {};
                                    return (
                                        <TechBadge
                                            key={skill}
                                            skill={skill}
                                            url={url}
                                            icon={icon}
                                            color={color}
                                            variant="default"
                                        />
                                    );
                                })}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
};

export default ExperienceItem;
