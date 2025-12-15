import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/Components/theme-provider";
import { ArrowLeft, ArrowUpRight, Moon, Sun } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card"; // Assuming these exist, otherwise I'll need to create standard divs
import { EXPERIANCE } from "../Constant/constant";
import { Badge } from "@/Components/ui/badge";

const Experience = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <Link to="/">
                        <Button variant="ghost" className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                            <ArrowLeft className="w-5 h-5" />
                            <span className="text-lg">Back to Home</span>
                        </Button>
                    </Link>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="rounded-full"
                    >
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-orange-500" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-500" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </div>

                <div className="space-y-2 mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Work Experience</h1>
                    <p className="text-muted-foreground text-lg">My professional journey and career milestones.</p>
                </div>

                <div className="space-y-12">
                    {EXPERIANCE.map((exp, index) => (
                        <div key={exp.id} className="relative pl-8 md:pl-0">
                            {/* Timeline Line (for styling flair) */}
                            <div className="hidden md:block absolute left-[149px] top-2 bottom-[-48px] w-px bg-border last:bottom-0 last:h-auto"></div>

                            <div className="md:grid md:grid-cols-[150px_1fr] md:gap-8 items-start">
                                {/* Date Column */}
                                <div className="text-sm text-muted-foreground font-mono pt-1 mb-2 md:mb-0 relative">
                                    <div className="hidden md:block absolute right-[-5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-primary bg-background z-10"></div>
                                    {exp.date}
                                </div>

                                {/* Content Column */}
                                <Card className="border-none shadow-none bg-transparent pt-0">
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-xl font-semibold leading-none">{exp.role}</h2>
                                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                            <span className="font-medium text-foreground">{exp.comapny_name}</span>
                                            <span>•</span>
                                            <span>{exp.location}</span>
                                        </div>

                                        {/* Description */}
                                        {exp.description && (
                                            <p className="text-secondary-foreground/80 leading-relaxed mt-2 text-base">
                                                {exp.description}
                                            </p>
                                        )}

                                        {/* Skills */}
                                        {exp.skills && exp.skills.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {exp.skills.map((skill) => (
                                                    <Badge key={skill} variant="secondary" className="font-normal text-xs px-2 py-0.5 bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
