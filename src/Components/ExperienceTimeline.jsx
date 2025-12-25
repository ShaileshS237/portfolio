import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ExperienceItem from "@/Components/ExperienceItem";

const ExperienceTimeline = ({ items = [], getSkillDetails }) => {
    const containerRef = React.useRef(null);
    // Use a generous offset so the animation begins as soon as the section enters the viewport
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 0.7", "end 0.3"] });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const lineOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

    return (
        <section ref={containerRef} className="relative min-h-[140vh] py-8 md:py-12">
            <div className="absolute left-2 md:left-3 top-0 bottom-0 w-px bg-border/40">
                <motion.div
                    aria-hidden="true"
                    style={{ height: lineHeight, opacity: lineOpacity }}
                    className="absolute left-0 top-0 w-px origin-top bg-gradient-to-b from-primary via-primary/70 to-primary/5"
                />
            </div>

            <div className="space-y-10 md:space-y-14">
                {items.map((exp, index) => (
                    <ExperienceItem
                        key={exp.id || index}
                        exp={exp}
                        index={index}
                        total={items.length}
                        scrollProgress={scrollYProgress}
                        getSkillDetails={getSkillDetails}
                    />
                ))}
            </div>
        </section>
    );
};

export default ExperienceTimeline;
