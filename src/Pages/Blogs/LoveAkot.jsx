import React, { useEffect } from "react";
import { useTheme } from "@/Components/theme-provider";
import { Button } from "@/Components/ui/button";
import { Badge } from "@/Components/ui/badge";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/Components/ui/card";

const LoveAkotBlog = () => {
    const { theme, setTheme } = useTheme();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-pink-500/20">
            {/* Navbar */}
            <nav className="sticky top-0 z-50 w-full backdrop-blur-sm bg-background/80 border-b">
                <div className="container max-w-3xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link to="/blogs" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2">
                            ← Back to Blogs
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

            <main className="container max-w-3xl mx-auto py-12 px-4 md:px-6">
                <motion.article
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="space-y-8"
                >
                    {/* Header */}
                    <motion.header variants={fadeInUp} className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-tight">
                            🌆 Love Akot: Building a Hyperlocal Community App for My Hometown
                        </h1>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Shailesh Sawale</span>
                            <span>·</span>
                            <span>May 8, 2025</span>
                            <span>·</span>
                            <span>7 min read</span>
                        </div>
                    </motion.header>

                    {/* Featured Image Placeholder */}
                    <motion.div variants={fadeInUp} className="relative aspect-video rounded-xl overflow-hidden bg-muted">
                        <img
                            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*AlSV7nMoxi-DQdf96xGgGw.png"
                            alt="Love Akot App Interface"
                            className="object-cover w-full h-full"
                            onError={(e) => {
                                e.target.src = "https://images.unsplash.com/photo-1596720426673-e4f54c08cdb7?q=80&w=2940&auto=format&fit=crop";
                            }}
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div variants={fadeInUp} className="prose prose-gray dark:prose-invert max-w-none prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-8 prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
                        <h3 className="flex items-center gap-2 text-2xl mt-12 mb-6">
                            <span className="text-3xl">🧠</span> The Idea Behind Love Akot
                        </h3>
                        <p>
                            Growing up in Akot, a small city in Maharashtra, I noticed how disconnected digital services felt from our everyday local needs. Whether it was finding a room to rent, checking today’s petrol or gas prices, discovering local news, or knowing about a power cut — people relied heavily on word-of-mouth or local WhatsApp groups.
                        </p>
                        <p>
                            That’s when the idea of <strong>Love Akot</strong> was born: <br />
                            <span className="block border-l-4 border-primary/50 pl-4 italic my-6 text-foreground">
                                A hyperlocal, community-first mobile app that brings everything about Akot into one digital platform.
                            </span>
                        </p>
                        <p>
                            Love Akot was built to address the gaps I saw in my hometown, providing a platform that would not only centralize critical information but also foster a sense of community. With features designed specifically for Akot, the app aims to be the go-to tool for every resident.
                        </p>

                        <h3 className="flex items-center gap-2 text-2xl mt-12 mb-6">
                            <span className="text-3xl">🧩</span> Problem Statement
                        </h3>
                        <p>Despite increasing smartphone penetration, small towns like Akot lack apps that:</p>
                        <ul className="list-none space-y-3 pl-4">
                            {[
                                "Provide localized, real-time information",
                                "Offer a room and flat search for migrants and students",
                                "Share community-driven updates (events, job listings, etc.)",
                                "Highlight essential prices (gold, petrol, gas) or local weather"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-primary mt-1.5">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p>This lack of a centralized local platform often leads to misinformation, missed opportunities, and dependency on social media rumors.</p>

                        <h3 className="flex items-center gap-2 text-2xl mt-12 mb-6">
                            <span className="text-3xl">💡</span> Why the Name “Love Akot”?
                        </h3>
                        <p>
                            The name <strong>Love Akot</strong> comes from a place of deep emotion and belonging. <br />
                            Akot isn’t just a dot on the map — it’s home. It’s where I grew up, made friends, discovered my passion for technology, and saw firsthand the gaps in how small towns are digitally represented.
                        </p>
                        <p>By naming the app Love Akot, I wanted to:</p>
                        <ul className="list-none space-y-3 pl-4">
                            {[
                                "Celebrate the spirit of the city and the people who make it special.",
                                "Make every resident feel that this app is built with love, for Akot.",
                                "Create a brand that feels familiar, personal, and rooted in emotion — not just utility."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-primary mt-1.5 text-lg">♥</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p>It’s not just an app name — it’s a movement to digitally uplift my hometown with care, compassion, and community.</p>

                        <h3 className="flex items-center gap-2 text-2xl mt-12 mb-6">
                            <span className="text-3xl">🛠️</span> From Version 1.0 to 2.0: Lessons Learned
                        </h3>
                        <p>
                            The first version of Love Akot was my attempt to quickly get something useful into people’s hands. While it succeeded in showing the potential of a hyperlocal platform, it had critical flaws — especially around content moderation.
                        </p>

                        <figure className="my-10">
                            <div className="rounded-xl overflow-hidden shadow-sm border border-muted bg-muted/30">
                                <img
                                    src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*aWYj9aSDa2CIBvzsazs9dw.png"
                                    alt="Love Akot V1.0 Interface"
                                    className="w-full h-auto"
                                />
                            </div>
                            <figcaption className="text-center text-sm text-muted-foreground mt-3">Reflecting on the early days of V1.0</figcaption>
                        </figure>

                        <p>
                            Users could post content without logging in, which made it vulnerable to spam and abuse, violating Google’s User Generated Content (UGC) policy. As a result, the app was removed from the Play Store.
                        </p>
                        <p>
                            That experience was a wake-up call. But instead of giving up, I decided to go back to the drawing board. I’ve spent the last 6–7 months completely rebuilding Love Akot with better architecture, authentication, and moderation in mind.
                        </p>
                        <p>
                            Love Akot 2.0 is not just a feature update — it’s a complete transformation, born from real-world feedback and hard-earned experience.
                        </p>

                        <h3 className="flex items-center gap-2 text-2xl mt-12 mb-6">
                            <span className="text-3xl">🚀</span> Key Features of Love Akot v2.0
                        </h3>
                        <p>Love Akot is packed with features that make it more than just an app — it’s a community tool that empowers Akot residents and visitors with real-time information and resources.</p>

                        <figure className="my-8">
                            <img
                                src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*B2eKf3OItZkiloi7E7haQg.png"
                                alt="Love Akot V2.0 Features Snapshot"
                                className="rounded-xl shadow-sm border border-muted w-full"
                            />
                        </figure>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 not-prose">
                            {[
                                { icon: "🌾", title: "Bajar Bhav for Farmers", desc: "Track market prices for crops to determine the best time to sell." },
                                { icon: "🛠️", title: "Local Services", desc: "Find trusted plumbers, electricians, and more. Add your own services." },
                                { icon: "📰", title: "Local & National News", desc: "Stay up-to-date with what’s happening close to home and across India." },
                                { icon: "🛒", title: "Buy & Sell Classifieds", desc: "Buy and sell second-hand goods like furniture and electronics locally." },
                                { icon: "💬", title: "Gupshup (Discussions)", desc: "A social forum for residents to discuss topics and connect." },
                                { icon: "🌡️", title: "Weather Updates", desc: "Real-time weather and temperature info to plan your day." },
                                { icon: "🚨", title: "Emergency Info", desc: "Quick access to police, fire, hospitals, and blood bank contacts." },
                                { icon: "💰", title: "Real-Time Prices", desc: "Live rates for Gold, Petrol, and Gas to monitor market trends." },
                            ].map((feature, i) => (
                                <Card key={i} className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-muted/50 transition-colors">
                                    <CardContent className="p-4 flex gap-4 items-start">
                                        <div className="text-3xl pt-1 bg-muted/50 p-2 rounded-lg">{feature.icon}</div>
                                        <div>
                                            <h4 className="font-semibold text-base">{feature.title}</h4>
                                            <p className="text-sm text-muted-foreground mt-1 leading-normal">{feature.desc}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <figure className="my-8">
                            <img
                                src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*aAeKrzRq1ieSA_OyHREf4g.png"
                                alt="More App Screens"
                                className="rounded-xl shadow-sm border border-muted w-full"
                            />
                        </figure>

                        <h3 className="flex items-center gap-2 text-2xl mt-12 mb-6">
                            <span className="text-3xl">🛠️</span> Behind the Scenes: The Technology
                        </h3>
                        <p>Creating Love Akot was no small feat. The app had to be robust, fast, and reliable. Here’s a quick peek at the tech stack:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
                            {[
                                { label: "Frontend", value: "Angular + Ionic" },
                                { label: "Backend", value: "Node.js + Express" },
                                { label: "Database", value: "MongoDB" },
                                { label: "Hosting", value: "AWS EC2" },
                                { label: "Real-Time", value: "Live APIs (Weather, Markets)" },
                                { label: "Auth", value: "OTPless (Passwordless)" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-3 border border-muted rounded-lg bg-muted/20">
                                    <span className="font-medium text-muted-foreground">{item.label}</span>
                                    <span className="font-semibold">{item.value}</span>
                                </div>
                            ))}
                        </div>

                        <figure className="my-8">
                            <img
                                src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*EZf1QvPfYTMOycWJiwJZSA.png"
                                alt="System Architecture and Design"
                                className="rounded-xl shadow-sm border border-muted w-full"
                            />
                        </figure>

                        <h3 className="flex items-center gap-2 text-2xl mt-12 mb-6">
                            <span className="text-3xl">❤️</span> Final Thoughts
                        </h3>
                        <p>
                            Love Akot is more than an app — it’s my humble contribution to the city that raised me. It’s about using tech to connect, simplify, and empower our local lives. If this can work in Akot, imagine the potential in thousands of similar towns across India.
                        </p>
                        <p>
                            In a world dominated by global platforms, our small towns often feel overlooked. With Love Akot, I wanted to change that narrative — to prove that even a town like Akot deserves a platform that speaks its language and serves its needs.
                        </p>
                        <p className="text-xl font-medium text-foreground mt-8">
                            This project has taught me that real impact starts small. But the dream is big. This is just the beginning.
                        </p>
                        <p className="font-medium text-primary mt-8 flex flex-wrap gap-2 text-sm not-prose">
                            <Badge variant="secondary" className="px-3 py-1">#LoveAkot</Badge>
                            <Badge variant="secondary" className="px-3 py-1">#TechForGood</Badge>
                            <Badge variant="secondary" className="px-3 py-1">#BuiltWithLove</Badge>
                        </p>
                    </motion.div>
                </motion.article>
            </main>
        </div>
    );
};

export default LoveAkotBlog;
