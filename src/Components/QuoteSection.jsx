
import React, { useState } from "react";
import { Quote } from "lucide-react";

const QUOTES = [
    {
        text: "Educate, agitate, organize.",
        author: "Dr. B.R. Ambedkar",
    },
    {
        text: "Cultivation of mind should be the ultimate aim of human existence.",
        author: "Dr. B.R. Ambedkar",
    },
    {
        text: "I measure the progress of a community by the degree of progress which women have achieved.",
        author: "Dr. B.R. Ambedkar",
    },
    {
        text: "Life should be great rather than long.",
        author: "Dr. B.R. Ambedkar",
    },
    {
        text: "Freedom of mind is the real freedom.",
        author: "Dr. B.R. Ambedkar",
    },
];

const QuoteSection = () => {
    // Select random quote once on mount
    const [quote] = useState(() => QUOTES[Math.floor(Math.random() * QUOTES.length)]);

    return (
        <div className="relative max-w-6xl mx-auto py-8 px-6 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
                <Quote className="w-24 h-24" />
            </div>

            <div className="relative z-10 space-y-6">
                <blockquote className="text-xl md:text-2xl font-serif italic text-foreground/90 leading-relaxed max-w-2xl mx-auto">
                    &ldquo;{quote.text}&rdquo;
                </blockquote>

                <div className="flex flex-col items-center gap-2">
                    <span className="w-12 h-0.5 bg-primary/30 rounded-full" />
                    <cite className="text-xs font-bold tracking-widest text-muted-foreground uppercase not-italic">
                        {quote.author}
                    </cite>
                </div>
            </div>
        </div>
    );
};

export default QuoteSection;

