"use client";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { searchMovies } from "@/lib/tmdb";
import { MovieGrid } from "@/components/movie/movie-grid";
import { MovieGridSkeleton } from "@/components/ui/loading-skeleton";
import { ErrorMessage } from "@/components/ui/error-message";

function SearchContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";
    const [page, setPage] = useState(1);

    // Reset page when query changes
    useEffect(() => {
        setPage(1);
    }, [query]);

    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["search-movies", query, page],
        queryFn: () => searchMovies(query, page),
        enabled: !!query,
    });

    if (!query) {
        return (
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-12 text-center">
                <h1 className="text-2xl font-bold text-white mb-4">Search Movies</h1>
                <p className="text-gray-400">Enter a movie title to start searching</p>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-8 md:py-12">
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Search Results
                </h1>
                <p className="text-gray-400">
                    Found {data?.total_results || 0} results for "{query}"
                </p>
            </div>

            {isLoading && <MovieGridSkeleton />}

            {error && (
                <ErrorMessage
                    message={error instanceof Error ? error.message : "Failed to search movies"}
                    onRetry={() => refetch()}
                />
            )}

            {data && (
                <>
                    <MovieGrid movies={data.results} />

                    {/* Pagination */}
                    {data.total_pages > 1 && (
                        <div className="mt-12 flex items-center justify-center gap-4">
                            <button
                                onClick={() => setPage((p) => Math.max(1, p - 1))}
                                disabled={page === 1}
                                className="px-6 py-2 rounded-lg bg-gray-800 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
                            >
                                Previous
                            </button>
                            <span className="text-white font-medium">
                                Page {page} of {data.total_pages > 500 ? 500 : data.total_pages}
                            </span>
                            <button
                                onClick={() => setPage((p) => p + 1)}
                                disabled={page >= (data.total_pages > 500 ? 500 : data.total_pages)}
                                className="px-6 py-2 rounded-lg bg-gray-800 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<MovieGridSkeleton />}>
            <SearchContent />
        </Suspense>
    );
}
