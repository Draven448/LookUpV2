"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";
import { discoverMoviesByGenre, getGenres } from "@/lib/tmdb";
import { MovieGrid } from "@/components/movie/movie-grid";
import { MovieGridSkeleton } from "@/components/ui/loading-skeleton";
import { ErrorMessage } from "@/components/ui/error-message";

export default function GenrePage() {
    const params = useParams();
    const genreId = Number(params.id);
    const [page, setPage] = useState(1);

    // Fetch genre name
    const { data: genresData } = useQuery({
        queryKey: ["genres"],
        queryFn: getGenres,
    });

    const genreName = genresData?.genres.find((g) => g.id === genreId)?.name || "Genre";

    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["genre-movies", genreId, page],
        queryFn: () => discoverMoviesByGenre(genreId, page),
        enabled: !!genreId,
    });

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{genreName} Movies</h1>
                <p className="text-gray-400">Browse the best {genreName.toLowerCase()} movies</p>
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
