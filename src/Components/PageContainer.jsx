import React, { useEffect } from "react";

const PageContainer = ({ children, title = "Shailesh Sawale" }) => {
    useEffect(() => {
        document.title = title.includes("Shailesh") ? title : `${title} | Shailesh Sawale`;
    }, [title]);

    return (
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/10">
            {children}
        </div>
    );
};

export const MainContent = ({ children, maxWidth = "max-w-3xl" }) => {
    return (
        <main className={`container ${maxWidth} mx-auto pt-24 pb-12 px-4 md:px-6 space-y-12`}>
            {children}
        </main>
    );
};

export default PageContainer;
