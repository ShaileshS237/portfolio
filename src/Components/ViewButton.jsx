import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ViewButton = ({
    children = "View",
    to = null,
    href = null,
    className = "",
    iconClassName = "",
    onClick = null,
}) => {
    const content = (
        <motion.span
            className={`inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground ring-offset-background transition-colors cursor-pointer ${className}`}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {children}
            <ArrowUpRight
                className={`w-4 h-4 group-hover:rotate-45 transition-transform duration-300 ${iconClassName}`}
            />
        </motion.span>
    );

    if (to) {
        return (
            <Link to={to} className="group" onClick={onClick}>
                {content}
            </Link>
        );
    }

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                onClick={onClick}
            >
                {content}
            </a>
        );
    }

    if (onClick) {
        return (
            <button onClick={onClick} className="group">
                {content}
            </button>
        );
    }

    return content;
};

export default ViewButton;
