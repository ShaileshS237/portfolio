import React from "react";
import { motion } from "framer-motion";

const PageHeader = ({ title, description, actions }) => {
    return (
        <div className="flex items-center justify-between">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-2"
            >
                <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
                {description && (
                    <p className="text-muted-foreground">{description}</p>
                )}
            </motion.div>
            {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
    );
};

export default PageHeader;
