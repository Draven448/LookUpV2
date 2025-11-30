import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us - MovieDB Explorer",
    description: "Learn more about MovieDB Explorer and our mission to help you discover your next favorite movie.",
};

export default function AboutPage() {
    return (
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-8 md:py-12">
            {/* Header Section */}
            <div className="mb-12 md:mb-16 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                    About MovieDB Explorer
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                    Your ultimate destination for discovering movies, exploring genres, and keeping up with the latest releases.
                </p>
            </div>

            {/* Mission Section */}
            <div className="mb-16">
                <div className="bg-linear-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-blue-500/20 shadow-xl">
                    <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        At MovieDB Explorer, we believe that everyone deserves to find their next favorite movie. Our mission is to make movie discovery simple, enjoyable, and accessible to everyone.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        We leverage the power of The Movie Database (TMDB) to bring you comprehensive information about thousands of movies, from timeless classics to the latest blockbusters.
                    </p>
                </div>
            </div>

            {/* Features Grid */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">What We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            icon: (
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                                </svg>
                            ),
                            title: "Extensive Library",
                            description: "Browse thousands of movies across all genres and time periods.",
                            color: "blue",
                        },
                        {
                            icon: (
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            ),
                            title: "Smart Search",
                            description: "Find exactly what you're looking for with our powerful search feature.",
                            color: "purple",
                        },
                        {
                            icon: (
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            ),
                            title: "Top Rated",
                            description: "Discover critically acclaimed films loved by audiences worldwide.",
                            color: "pink",
                        },
                        {
                            icon: (
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            ),
                            title: "Popular Now",
                            description: "Stay updated with trending movies and what's hot right now.",
                            color: "blue",
                        },
                        {
                            icon: (
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            ),
                            title: "Coming Soon",
                            description: "Get a sneak peek at upcoming releases and plan your watchlist.",
                            color: "purple",
                        },
                        {
                            icon: (
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            ),
                            title: "Detailed Info",
                            description: "Access comprehensive details, ratings, and reviews for every movie.",
                            color: "pink",
                        },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105"
                        >
                            <div className={`w-14 h-14 bg-${feature.color}-500/10 rounded-lg flex items-center justify-center mb-4 text-${feature.color}-400`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Technology Section */}
            <div className="mb-16">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-800 shadow-xl">
                    <h2 className="text-3xl font-bold text-white mb-6">Powered by TMDB</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        MovieDB Explorer is built using data from The Movie Database (TMDB), one of the most comprehensive and reliable sources of movie information available.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        We use modern web technologies including Next.js, React, and Tailwind CSS to deliver a fast, responsive, and beautiful user experience across all devices.
                    </p>
                    <div className="flex items-center space-x-4">
                        <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 font-medium">
                            Next.js 16
                        </div>
                        <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-400 font-medium">
                            React 19
                        </div>
                        <div className="px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-lg text-pink-400 font-medium">
                            Tailwind CSS
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 shadow-2xl">
                    <h2 className="text-3xl font-bold text-white mb-4">Start Exploring Today</h2>
                    <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
                        Join thousands of movie enthusiasts who use MovieDB Explorer to discover their next favorite film.
                    </p>
                    <a
                        href="/"
                        className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
                    >
                        Browse Movies
                    </a>
                </div>
            </div>
        </div>
    );
}
