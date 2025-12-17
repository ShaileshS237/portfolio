
import React from "react";
import { useTheme } from "@/Components/theme-provider";
import { Button } from "@/Components/ui/button";
import { Card } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Sun, Moon, ArrowLeft, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { EXPERIENCE } from "@/constants";
import { Link } from "react-router-dom";

const getSkillDetails = (skill) => {
    const normalize = (s) => s.toLowerCase().replace(/[\s\.]/g, '');
    const key = normalize(skill);

    const db = {
        'reactjs': { url: 'https://react.dev', slug: 'react' },
        'flutter': { url: 'https://flutter.dev', slug: 'flutter' },
        'figma': { url: 'https://figma.com', slug: 'figma' },
        'adobeillustrator': { url: 'https://www.adobe.com/products/illustrator', slug: 'adobeillustrator' },
        'adobephotoshop': { url: 'https://www.adobe.com/products/photoshop', slug: 'adobephotoshop' },
        'ionic': { url: 'https://ionicframework.com', slug: 'ionic' },
        'angular': { url: 'https://angular.io', slug: 'angular' },
        'mysql': { url: 'https://www.mysql.com', slug: 'mysql' },
        'restapi': { url: 'https://restfulapi.net', iconVal: <Globe className="w-3 h-3" /> },
        'adobecreativesuite': { url: 'https://www.adobe.com/creativecloud.html', slug: 'adobecreativecloud' },
        'adobexd': { url: 'https://helpx.adobe.com/xd/get-started.html', slug: 'adobexd' },
        'adobeaudition': { url: 'https://www.adobe.com/products/audition.html', slug: 'adobeaudition' },
        'adobeaftereffects': { url: 'https://www.adobe.com/products/aftereffects.html', slug: 'adobeaftereffects' },
        'adobepremierepro': { url: 'https://www.adobe.com/products/premiere.html', slug: 'adobepremierepro' },
    };

    const match = db[key];
    if (match) {
        return {
            url: match.url,
            icon: match.slug ? <img src={`https://cdn.simpleicons.org/${match.slug}`} alt="" className="w-3 h-3 object-contain dark:invert" /> : match.iconVal
        };
    }
    return { url: null, icon: null };
};

const Experience = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/10">
            {/* Navbar (Kept from new design) */}
            <nav className="sticky top-0 z-50 w-full backdrop-blur-sm bg-background/80">
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

            <main className="container max-w-3xl mx-auto py-12 px-4 md:px-6 space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                >
                    <h1 className="text-3xl font-bold tracking-tight">Experience</h1>
                    <p className="text-muted-foreground">My professional journey and career milestones.</p>
                </motion.div>

                <div className="space-y-12">
                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Line (for styling flair) */}
                            <div className="hidden md:block absolute left-[149px] top-2 bottom-[-48px] w-px bg-border last:bottom-0 last:h-auto"></div>

                            <div className="md:grid md:grid-cols-[150px_1fr] md:gap-8 items-start">
                                {/* Date Column */}
                                <div className="text-sm text-muted-foreground font-medium pt-1.5 mb-2 md:mb-0 relative md:text-right md:pr-4">
                                    {/* Dot */}
                                    <div className="hidden md:block absolute right-[-5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-primary bg-background z-10 transition-colors duration-300"></div>
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
                                        <p className="text-muted-foreground leading-relaxed">
                                            {exp.description}
                                        </p>
                                    )}

                                    {exp.skills && exp.skills.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {exp.skills.map((skill) => {
                                                const { url, icon } = getSkillDetails(skill);
                                                const Wrapper = url ? 'a' : 'span';
                                                const props = url ? { href: url, target: "_blank", rel: "noreferrer" } : {};

                                                return (
                                                    <Wrapper
                                                        key={skill}
                                                        {...props}
                                                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-dashed border-border bg-transparent text-xs font-medium text-muted-foreground hover:border-solid hover:text-foreground hover:bg-muted/50 transition-all cursor-pointer"
                                                    >
                                                        {icon}
                                                        <span>{skill}</span>
                                                    </Wrapper>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Experience;
