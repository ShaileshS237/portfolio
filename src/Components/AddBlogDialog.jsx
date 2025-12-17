import React, { useState } from "react";
import { Button } from "@/Components/ui/button";
import { Badge } from "@/Components/ui/badge";
import { X, Plus, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AddBlogDialog = ({ isOpen, onClose, onSubmit }) => {
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        tags: "",
        link: ""
    });

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        // Simple password check - in production, use proper authentication
        if (password === "shailesh@2024") {
            setIsAuthenticated(true);
        } else {
            alert("Incorrect password!");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);

        const newBlog = {
            id: Date.now(),
            title: formData.title,
            description: formData.description,
            date: formData.date,
            tags: tagsArray,
            link: formData.link
        };

        onSubmit(newBlog);
        handleClose();
    };

    const handleClose = () => {
        setPassword("");
        setIsAuthenticated(false);
        setFormData({
            title: "",
            description: "",
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            tags: "",
            link: ""
        });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 "
                onClick={handleClose}
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-background border rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl  border-muted"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b  border-muted sticky top-0 bg-background z-10">
                        <h2 className="text-xl font-bold flex items-center gap-2 ">
                            {!isAuthenticated && <Lock className="w-5 h-5" />}
                            {isAuthenticated ? "Add New Blog" : "Authentication Required"}
                        </h2>
                        <Button variant="ghost" size="icon" onClick={handleClose}>
                            <X className="w-4 h-4" />
                        </Button>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        {!isAuthenticated ? (
                            <form onSubmit={handlePasswordSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">
                                        Enter Password
                                    </label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-3 py-2 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Password"
                                        autoFocus
                                    />
                                </div>
                                <Button type="submit" className="w-full" disabled={!password}>
                                    Authenticate
                                </Button>
                            </form>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Title</label>
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        className="w-full px-3 py-2 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Blog title"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Description</label>
                                    <textarea
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        className="w-full px-3 py-2 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-20"
                                        placeholder="Brief description"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Link</label>
                                    <input
                                        type="url"
                                        value={formData.link}
                                        onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                                        className="w-full px-3 py-2 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="https://medium.com/@shaileshsawale7/..."
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Tags (comma-separated)</label>
                                    <input
                                        type="text"
                                        value={formData.tags}
                                        onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                                        className="w-full px-3 py-2 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="React, Next.js, Design"
                                    />
                                </div>

                                <div className="flex gap-3 pt-4">
                                    <Button type="button" variant="outline" onClick={handleClose} className="flex-1">
                                        Cancel
                                    </Button>
                                    <Button type="submit" className="flex-1">
                                        Add Blog
                                    </Button>
                                </div>
                            </form>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AddBlogDialog;
