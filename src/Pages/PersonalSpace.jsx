import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, LockKeyhole, ShieldCheck, Sparkles, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/Components/Navbar";
import PageHeader from "@/Components/PageHeader";
import PageContainer, { MainContent } from "@/Components/PageContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";

const ACCESS_KEY = "personal-space-access";
const PASSWORD_HASH = "dd4969be999c2f2f0127484c88ea4980863da2703a1ce08ab83e3177a03ff3e5";

const hashPassword = async (password) => {
    const data = new TextEncoder().encode(password);
    const digest = await window.crypto.subtle.digest("SHA-256", data);

    return Array.from(new Uint8Array(digest))
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");
};

const spaces = [
    {
        title: "Beyond the screen",
        description: "A place for the interests, ideas, and little things that make life interesting outside of work.",
        icon: Heart,
    },
    {
        title: "On the court",
        description: "Baseball, volleyball, and badminton are my favorite ways to reset, compete, and have fun.",
        icon: Trophy,
    },
    {
        title: "More to come",
        description: "Notes, recommendations, photos, and things I am currently enjoying will find a home here.",
        icon: Sparkles,
    },
];

const PersonalSpace = () => {
    const [hasAccess, setHasAccess] = useState(
        () => sessionStorage.getItem(ACCESS_KEY) === "granted"
    );
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isChecking, setIsChecking] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsChecking(true);
        setError("");

        const submittedHash = await hashPassword(password);

        if (submittedHash === PASSWORD_HASH) {
            sessionStorage.setItem(ACCESS_KEY, "granted");
            setHasAccess(true);
            setPassword("");
        } else {
            setError("That password is not correct. Please try again.");
        }

        setIsChecking(false);
    };

    return (
        <PageContainer title="Personal Space">
            <Navbar backToHome title="Personal Space" />
            <MainContent>
                {hasAccess ? (
                    <>
                        <PageHeader
                            title="Personal Space"
                            description="A small corner of the internet for everything beyond the résumé."
                        />

                        <Link to="/personal-space/evidence" className="group block">
                            <Card className="border-2 border-muted bg-card/50 shadow-none transition-colors group-hover:bg-muted/30">
                                <CardContent className="flex flex-col justify-between gap-5 p-5 sm:flex-row sm:items-center">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-muted">
                                            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <h2 className="font-semibold">Proof / Evidence Viewer</h2>
                                            <p className="mt-1 text-sm text-muted-foreground">
                                                Organize and review timelines, records, media, documents, and related context.
                                            </p>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium">Open workspace →</span>
                                </CardContent>
                            </Card>
                        </Link>

                        <motion.div
                            className="grid grid-cols-1 gap-4 md:grid-cols-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                        >
                            {spaces.map(({ title, description, icon: Icon }) => (
                                <Card key={title} className="h-full border-2 border-muted shadow-none transition-colors hover:bg-muted/30">
                                    <CardHeader className="space-y-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                                            <Icon className="h-5 w-5" aria-hidden="true" />
                                        </div>
                                        <CardTitle className="text-lg">{title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm leading-relaxed text-muted-foreground">
                                            {description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </motion.div>
                    </>
                ) : (
                    <motion.div
                        className="mx-auto flex min-h-[60vh] max-w-md items-center"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Card className="w-full border-2 border-muted shadow-none">
                            <CardHeader className="items-center space-y-4 text-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                                    <LockKeyhole className="h-5 w-5" aria-hidden="true" />
                                </div>
                                <div className="space-y-2">
                                    <CardTitle>Personal space</CardTitle>
                                    <p className="text-sm text-muted-foreground">
                                        This page is private. Enter the password to continue.
                                    </p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium" htmlFor="personal-space-password">
                                            Password
                                        </label>
                                        <input
                                            id="personal-space-password"
                                            type="password"
                                            value={password}
                                            onChange={(event) => {
                                                setPassword(event.target.value);
                                                setError("");
                                            }}
                                            autoComplete="current-password"
                                            autoFocus
                                            required
                                            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                                            placeholder="Enter password"
                                        />
                                        {error && (
                                            <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                                                {error}
                                            </p>
                                        )}
                                    </div>
                                    <Button className="w-full" type="submit" disabled={isChecking}>
                                        {isChecking ? "Checking…" : "Unlock personal space"}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                )}
            </MainContent>
        </PageContainer>
    );
};

export default PersonalSpace;
