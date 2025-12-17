import React, { useState } from "react";
import { useTheme } from "@/Components/theme-provider";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { ArrowUpRight, Sun, Moon, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { BLOGS } from "@/constants";
import { Link } from "react-router-dom";
import AddBlogDialog from "../Components/AddBlogDialog";

const Blogs = () => {
    const { theme, setTheme } = useTheme();
    const [blogs, setBlogs] = useState(BLOGS);
    const [isAddBlogOpen, setIsAddBlogOpen] = useState(false);

    const handleAddBlog = (newBlog) => {
        setBlogs([newBlog, ...blogs]);
        // In a real app, you would save this to a backend/database
        console.log("New blog added:", newBlog);
    };

    return (
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/10">
            {/* Navbar (Simplified for sub-pages) */}
            <nav className="sticky top-0 z-50 w-full backdrop-blur-sm bg-background/80">
                <div className="container max-w-3xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                            ← Back to Home
                        </Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-9 w-9"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        </Button>
                    </div>
                </div>
            </nav>

            <main className="container max-w-3xl mx-auto py-12 px-4 md:px-6 space-y-12">
                <div className="flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-2"
                    >
                        <h1 className="text-3xl font-bold tracking-tight">Blogs</h1>
                        <p className="text-muted-foreground">Thoughts, tutorials, and insights.</p>
                    </motion.div>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsAddBlogOpen(true)}
                        className="gap-2"
                    >
                        <Plus className="w-4 h-4" /> Add Blog
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {blogs.map((blog, index) => {
                        const isInternal = blog.link.startsWith('/');
                        const Wrapper = isInternal ? Link : motion.a;
                        const props = isInternal
                            ? { to: blog.link, className: "group block h-full" }
                            : { href: blog.link, target: "_blank", rel: "noreferrer", className: "group block h-full" };

                        return (
                            <Wrapper
                                key={blog.id}
                                {...props}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="h-full"
                                >
                                    <Card className="transition-colors hover:bg-muted/50 h-full">
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
                                                    <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0 rounded-sm font-normal">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Wrapper>
                        );
                    })}
                </div>
            </main>

            <AddBlogDialog
                isOpen={isAddBlogOpen}
                onClose={() => setIsAddBlogOpen(false)}
                onSubmit={handleAddBlog}
            />
        </div>
    );
};

export default Blogs;
