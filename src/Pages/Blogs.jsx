import React, { useState } from "react";
import { useTheme } from "@/Components/theme-provider";
import { Button } from "@/Components/ui/button";
import { Plus } from "lucide-react";
import { BLOGS } from "@/constants";
import AddBlogDialog from "../Components/AddBlogDialog";
import Navbar from "@/Components/Navbar";
import PageHeader from "@/Components/PageHeader";
import PageContainer, { MainContent } from "@/Components/PageContainer";
import BlogCard from "@/Components/BlogCard";

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
        <PageContainer>
            <Navbar />
            <MainContent>
                <PageHeader
                    title="Blogs"
                    description="Thoughts, tutorials, and insights."
                    actions={
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setIsAddBlogOpen(true)}
                            className="gap-2"
                        >
                            <Plus className="w-4 h-4" /> Add Blog
                        </Button>
                    }
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {blogs.map((blog, index) => (
                        <BlogCard key={blog.id} blog={blog} index={index} />
                    ))}
                </div>
            </MainContent>

            <AddBlogDialog
                isOpen={isAddBlogOpen}
                onClose={() => setIsAddBlogOpen(false)}
                onSubmit={handleAddBlog}
            />
        </PageContainer>
    );
};

export default Blogs;
