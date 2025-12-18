import React from "react";

const TechBadge = ({ skill, url, icon, color, variant = "default" }) => {
    const Wrapper = url ? 'a' : 'span';
    const props = url ? { href: url, target: "_blank", rel: "noreferrer" } : {};

    const variantStyles = {
        default: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-dashed ${color} text-sm font-medium transition-colors cursor-pointer`,
        compact: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded border ${color} text-xs font-medium transition-all cursor-pointer hover:scale-105`
    };

    return (
        <Wrapper
            {...props}
            className={variantStyles[variant]}
        >
            {icon}
            <span>{skill}</span>
        </Wrapper>
    );
};

export default TechBadge;
