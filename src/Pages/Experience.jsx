
import React from "react";
import { useTheme } from "@/Components/theme-provider";
import { Card } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Globe, Terminal } from "lucide-react";
import TechBadge from "@/Components/TechBadge";
import ExperienceCard from "@/Components/ExperienceCard";
import { motion } from "framer-motion";
import { EXPERIENCE } from "@/constants";
import Navbar from "@/Components/Navbar";
import PageHeader from "@/Components/PageHeader";
import PageContainer, { MainContent } from "@/Components/PageContainer";

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

const Experience = () => {
    const { theme } = useTheme();

    const technicalExperiences = EXPERIENCE.filter(exp => exp.type === 'technical');
    const nonTechnicalExperiences = EXPERIENCE.filter(exp => exp.type === 'non-technical');

    return (
        <PageContainer title="Work Experience">
            <Navbar title="Work Experience" />
            <MainContent>
                <PageHeader
                    title="Work Experience"
                    description="My professional journey and career milestones."
                />

                <div className="space-y-16">
                    {/* Technical Experience Section */}
                    {technicalExperiences.length > 0 && (
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <h2 className="text-2xl font-bold tracking-tight">Technical Experience</h2>
                                <div className="h-[1px] flex-1 bg-gradient-to-r from-muted to-transparent" />
                            </div>
                            <div className="space-y-12">
                                {technicalExperiences.map((exp, index) => (
                                    <ExperienceCard
                                        key={exp.id}
                                        exp={exp}
                                        index={index}
                                        getSkillDetails={getSkillDetails}
                                        variant="compact"
                                        isCollapsible={false}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Non-Technical Experience Section */}
                    {nonTechnicalExperiences.length > 0 && (
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <h2 className="text-2xl font-bold tracking-tight">Non-Technical Experience</h2>
                                <div className="h-[1px] flex-1 bg-gradient-to-r from-muted to-transparent" />
                            </div>
                            <div className="space-y-12">
                                {nonTechnicalExperiences.map((exp, index) => (
                                    <ExperienceCard
                                        key={exp.id}
                                        exp={exp}
                                        index={index}
                                        getSkillDetails={getSkillDetails}
                                        variant="compact"
                                        isCollapsible={false}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </MainContent>
        </PageContainer>
    );
};

export default Experience;
