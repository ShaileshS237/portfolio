import React from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

const components = {
    h1: ({ children }) => <h1 className="mb-3 mt-6 text-xl font-bold first:mt-0">{children}</h1>,
    h2: ({ children }) => <h2 className="mb-2 mt-5 text-lg font-semibold first:mt-0">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-2 mt-4 text-base font-semibold first:mt-0">{children}</h3>,
    h4: ({ children }) => <h4 className="mb-2 mt-4 text-sm font-semibold first:mt-0">{children}</h4>,
    p: ({ children }) => <p className="my-2 leading-7 first:mt-0 last:mb-0">{children}</p>,
    ul: ({ children }) => <ul className="my-3 list-disc space-y-1 pl-6">{children}</ul>,
    ol: ({ children }) => <ol className="my-3 list-decimal space-y-1 pl-6">{children}</ol>,
    li: ({ children }) => <li className="pl-1 leading-7">{children}</li>,
    blockquote: ({ children }) => <blockquote className="my-4 border-l-4 border-muted-foreground/35 pl-4 italic text-muted-foreground">{children}</blockquote>,
    a: ({ href, children }) => <a href={href} target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">{children}</a>,
    hr: () => <hr className="my-5 border-muted" />,
    code: ({ children }) => <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.9em]">{children}</code>,
    pre: ({ children }) => <pre className="my-4 overflow-x-auto rounded-lg bg-muted p-4 text-xs leading-6">{children}</pre>,
    table: ({ children }) => <table className="my-4 w-full border-collapse text-left text-xs">{children}</table>,
    th: ({ children }) => <th className="border-2 border-muted bg-muted/50 p-2 font-semibold">{children}</th>,
    td: ({ children }) => <td className="border-2 border-muted p-2 align-top">{children}</td>,
};

export const markdownToPlainText = (value = "") => value
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^\s*>\s?/gm, "")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*\d+[.)]\s+/gm, "")
    .replace(/[*_~`]/g, "")
    .replace(/^\s*-{3,}\s*$/gm, "")
    .replace(/\s+/g, " ")
    .trim();

const MarkdownContent = ({ children, className = "" }) => {
    if (!children) return null;
    return (
        <div className={className}>
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]} components={components}>
                {children}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownContent;
