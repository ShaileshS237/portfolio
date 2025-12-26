import React from "react";
import { ArrowUpRight } from "lucide-react";

const SocialCard = ({ icon, name, handle, href }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-between p-4 rounded-xl border-2 border-muted bg-card hover:bg-muted/50 transition-colors group text-left"
    >
        <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted text-foreground group-hover:bg-background transition-colors shrink-0">
                {icon}
            </div>
            <div className="flex flex-col overflow-hidden">
                <span className="text-sm font-semibold leading-none truncate">{name}</span>
                <span className="text-xs text-muted-foreground mt-1 truncate">{handle}</span>
            </div>
        </div>
        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
    </a>
);

export default SocialCard;
