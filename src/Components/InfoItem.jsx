import React from "react";

const InfoItem = ({ icon, text, disabled, href }) => {
    const content = (
        <div className={`flex items-center gap-3 ${disabled ? "opacity-50" : ""}`}>
            <div className="flex items-center justify-center w-8 h-8 rounded-lg border border-muted bg-muted/50 text-muted-foreground shrink-0">
                {icon}
            </div>
            <span className="text-sm font-medium truncate">{text}</span>
        </div>
    );

    if (href) {
        return (
            <a href={href} className="hover:text-primary transition-colors">
                {content}
            </a>
        );
    }

    return content;
};

export default InfoItem;
