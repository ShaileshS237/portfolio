import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const BlogCard = ({ blog, index = 0 }) => {
    const isInternal = blog.link.startsWith('/');
    const Wrapper = isInternal ? Link : motion.a;
    const props = isInternal
        ? { to: blog.link, className: "group block h-full" }
        : { href: blog.link, target: "_blank", rel: "noreferrer", className: "group block h-full" };

    return (
        <Wrapper {...props}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
            >
                <Card className="transition-colors hover:bg-muted/50 h-full border-muted">
                    <CardContent className="p-4 space-y-2 flex flex-col h-full">
                        <div className="flex items-start justify-between">
                            <div className="space-y-1">
                                <h3 className="font-semibold group-hover:underline decoration-primary underline-offset-4 flex items-center gap-2">
                                    {blog.title}
                                </h3>
                                <p className="text-xs text-muted-foreground">{blog.date}</p>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
                            {blog.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {blog.tags.map(tag => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </Wrapper>
    );
};

export default BlogCard;
