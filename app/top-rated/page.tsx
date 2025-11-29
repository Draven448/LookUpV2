"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getTopRatedMovies } from "@/lib/tmdb";
import { MovieGrid } from "@/components/movie/movie-grid";
import { MovieGridSkeleton } from "@/components/ui/loading-skeleton";
import { ErrorMessage } from "@/components/ui/error-message";

export default function TopRatedPage() {
    const [page, setPage] = useState(1);

    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["top-rated-movies", page],
        queryFn: () => getTopRatedMovies(page),
    });

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Top Rated Movies</h1>
                <p className="text-gray-400">The highest-rated films of all time</p>
            </div>

            {isLoading && <MovieGridSkeleton />}

            {error && (
                <ErrorMessage
                    message={error instanceof Error ? error.message : "Failed to load movies"}
                    onRetry={() => refetch()}
                />
            )}

            {data && (
                <>
                    <MovieGrid movies={data.results} />

                    {/* Pagination */}
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
                </>
            )}
        </div>
    );
}
