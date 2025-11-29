"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { SearchBar } from "@/components/search/search-bar";
import { cn } from "@/lib/utils";

export function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navigation = [
        { name: "Home", href: "/" },
        { name: "Popular", href: "/popular" },
        { name: "Top Rated", href: "/top-rated" },
        { name: "Upcoming", href: "/upcoming" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-gray-950/80 backdrop-blur-md border-gray-800 py-2"
                    : "bg-transparent border-transparent py-4"
            )}
        >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="flex w-full items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-blue-600 to-purple-600 shadow-lg shadow-blue-900/20 group-hover:shadow-blue-900/40 transition-all duration-300 group-hover:scale-105">
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                                    />
                                </svg>
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 hidden sm:block">
                                MovieDB Explorer
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <div className="flex items-center space-x-6">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                                        pathname === item.href
                                            ? "bg-white/10 text-white shadow-inner"
                                            : "text-gray-300 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="w-64">
                            <Suspense fallback={<div className="w-full h-10 bg-gray-800 rounded-full animate-pulse" />}>
                                <SearchBar />
                            </Suspense>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            className="p-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {mobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu overlay */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-gray-950/95 backdrop-blur-xl border-b border-gray-800 shadow-2xl animate-in slide-in-from-top-5 duration-200">
                        <div className="px-4 py-6 space-y-4">
                            <div className="space-y-1">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={cn(
                                            "block px-4 py-3 text-base font-medium rounded-xl transition-colors",
                                            pathname === item.href
                                                ? "bg-blue-600/20 text-blue-400"
                                                : "text-gray-300 hover:bg-white/5 hover:text-white"
                                        )}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="pt-4 border-t border-gray-800">
                                <Suspense fallback={<div className="w-full h-10 bg-gray-800 rounded-lg animate-pulse" />}>
                                    <SearchBar />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
