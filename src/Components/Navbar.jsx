import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useTheme } from "@/Components/theme-provider";
import { Button } from "@/Components/ui/button";
import { Sun, Moon, ArrowLeft } from "lucide-react";

const Navbar = ({
    backToHome = true,
    showThemeToggle = true,
    backTo = "/",
    backText = "← Back to Home",
    title = null,
    navLinks = [],
    sticky = false
}) => {
    const { theme, setTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchParams] = useSearchParams();
    const isVMode = searchParams.get("v") === "true";
    const queryString = isVMode ? "?v=true" : "";

    const getLinkPath = (path) => {
        if (!path) return path;
        // Don't append to hash links or external links if handled here (though external usually are <a>)
        if (path.startsWith("#")) return path;
        return `${path}${queryString}`;
    };

    const positionClass = sticky ? "sticky" : "fixed";
    const borderClass = !title ? "border-b border-muted" : "";

    return (
        <nav className={`${positionClass} top-0 left-0 right-0 z-50 w-full backdrop-blur-sm bg-background/80 ${borderClass}`}>
            <div className="container max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between ">
                {/* Left side */}
                <div className="flex items-center gap-4">
                    {backToHome && (
                        <Link
                            to={getLinkPath(backTo)}
                            className="flex items-center justify-center h-10 w-10 rounded-lg border border-muted bg-background hover:bg-muted transition-colors"
                        >
                            <span className="text-base">

                                <ArrowLeft className="h-4 w-4" />
                            </span>
                        </Link>
                    )}
                    {title && (
                        <Link to={getLinkPath("/")} className="font-semibold text-lg tracking-tight hover:text-primary transition-colors">
                            {title}
                        </Link>
                    )}
                </div>

                {/* Right side */}
                <div className="flex items-center gap-6">
                    {/* Desktop Navigation Links */}
                    {navLinks.length > 0 && (
                        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                            {navLinks.map((link, index) => (
                                link.external ? (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className="hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <Link
                                        key={index}
                                        to={getLinkPath(link.href)}
                                        className="hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                )
                            ))}
                        </div>
                    )}

                    <div className="flex items-center gap-2">
                        {/* Theme Toggle */}
                        {showThemeToggle && (
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-9 w-9"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            >
                                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                            </Button>
                        )}

                        {/* Mobile Menu Button */}
                        {navLinks.length > 0 && (
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-9 w-9 md:hidden"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                <div className="space-y-1.5 w-4">
                                    <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                                    <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
                                    <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                                </div>
                            </Button>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {navLinks.length > 0 && (
                <div className={`md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-sm border-t transition-all duration-300 ${isMobileMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                    <div className="container max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4 text-sm font-medium">
                        {navLinks.map((link, index) => (
                            link.external ? (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="hover:text-foreground transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <Link
                                    key={index}
                                    to={getLinkPath(link.href)}
                                    className="hover:text-foreground transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
