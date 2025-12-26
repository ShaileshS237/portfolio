import React from 'react';
import { motion } from 'framer-motion';
import {
    Laptop,
    Monitor,
    Keyboard,
    Mouse,
    Headphones,
    Speaker,
    Smartphone,
    Code,
    Terminal,
    Globe,
    Layout,
    HardDrive,
    Sparkles
} from 'lucide-react';
import { GEAR_ITEMS } from '@/constants';

const IconMap = {
    Laptop,
    Monitor,
    Keyboard,
    Mouse,
    Headphones,
    Speaker,
    Smartphone,
    Code,
    Terminal,
    Globe,
    Layout,
    HardDrive,
    Sparkles
};

const GearSection = () => {
    return (
        <section id="gear" className="space-y-8 scroll-mt-20">
            <div className="space-y-12">
                {GEAR_ITEMS.map((category, catIndex) => (
                    <div key={category.category} className="space-y-4">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="text-sm font-semibold uppercase tracking-wider text-muted-foreground ml-1"
                        >
                            {category.category}
                        </motion.h3>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {category.items.map((item, itemIndex) => {
                                const IconComponent = IconMap[item.icon] || HardDrive;
                                return (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (catIndex * 0.1) + (itemIndex * 0.05) }}
                                        className="group flex items-start gap-4 rounded-xl border-2 border-muted bg-card/50 p-4 hover:bg-muted/50 transition-all duration-300"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                            <IconComponent className="h-5 w-5" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-medium leading-none group-hover:text-primary transition-colors">
                                                {item.name}
                                            </h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GearSection;
