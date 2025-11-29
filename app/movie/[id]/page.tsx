"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
    getMovieDetails,
    getMovieCredits,
    getMovieReviews,
    getSimilarMovies,
} from "@/lib/tmdb";
import {
    getBackdropUrl,
    getPosterUrl,
    getProfileUrl,
    formatDate,
    formatRuntime,
    formatCurrency,
    formatRating,
    getRatingColor,
} from "@/lib/utils";
import { MovieGrid } from "@/components/movie/movie-grid";
import { MovieDetailsSkeleton } from "@/components/ui/loading-skeleton";
import { ErrorMessage } from "@/components/ui/error-message";

export default function MoviePage() {
    const params = useParams();
    const movieId = Number(params.id);

    const {
        data: movie,
        isLoading: movieLoading,
        error: movieError,
    } = useQuery({
        queryKey: ["movie", movieId],
        queryFn: () => getMovieDetails(movieId),
        enabled: !!movieId,
    });

    const { data: credits } = useQuery({
        queryKey: ["movie-credits", movieId],
        queryFn: () => getMovieCredits(movieId),
        enabled: !!movieId,
    });

    const { data: reviews } = useQuery({
        queryKey: ["movie-reviews", movieId],
        queryFn: () => getMovieReviews(movieId),
        enabled: !!movieId,
    });

    const { data: similar } = useQuery({
        queryKey: ["movie-similar", movieId],
        queryFn: () => getSimilarMovies(movieId),
        enabled: !!movieId,
    });

    if (movieLoading) return <div className="mx-auto max-w-7xl px-4 py-8"><MovieDetailsSkeleton /></div>;

    if (movieError) {
        return (
            <ErrorMessage
                message={movieError instanceof Error ? movieError.message : "Failed to load movie details"}
            />
        );
    }

    if (!movie) return null;

    const backdropUrl = getBackdropUrl(movie.backdrop_path);
    const posterUrl = getPosterUrl(movie.poster_path);
    const director = credits?.crew.find((c) => c.job === "Director");
    const writers = credits?.crew.filter((c) => c.department === "Writing").slice(0, 2);

    return (
        <div className="min-h-screen bg-gray-950">
            {/* Hero Section with Backdrop */}
            <div className="relative h-[60vh] md:h-[70vh] w-full">
                <div className="absolute inset-0">
                    <Image
                        src={backdropUrl}
                        alt={movie.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/60 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-12">
                    <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-8 items-end">
                        {/* Poster (Hidden on mobile, visible on tablet+) */}
                        <div className="hidden md:block relative w-64 aspect-2/3 rounded-lg overflow-hidden shadow-2xl shrink-0">
                            <Image
                                src={posterUrl}
                                alt={movie.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Movie Info */}
                        <div className="flex-1 text-white space-y-4">
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                {movie.title} <span className="text-gray-400 font-normal">({new Date(movie.release_date).getFullYear()})</span>
                            </h1>

                            <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-gray-300">
                                <span className="border border-gray-600 px-2 py-0.5 rounded">
                                    {movie.adult ? "R" : "PG-13"}
                                </span>
                                <span>{formatDate(movie.release_date)}</span>
                                <span>•</span>
                                <span>{formatRuntime(movie.runtime)}</span>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {movie.genres.map((genre) => (
                                    <Link
                                        key={genre.id}
                                        href={`/genre/${genre.id}`}
                                        className="px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-700 text-sm transition-colors"
                                    >
                                        {genre.name}
                                    </Link>
                                ))}
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${getRatingColor(movie.vote_average).replace('text-', 'border-')} bg-gray-900`}>
                                        <span className={`font-bold ${getRatingColor(movie.vote_average)}`}>
                                            {formatRating(movie.vote_average)}
                                        </span>
                                    </div>
                                    <span className="text-sm font-medium">User Score</span>
                                </div>
                            </div>

                            <div className="max-w-3xl">
                                <h3 className="text-xl font-semibold mb-2">Overview</h3>
                                <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-4">
                                {director && (
                                    <div>
                                        <h4 className="font-bold">Director</h4>
                                        <p className="text-gray-300">{director.name}</p>
                                    </div>
                                )}
                                {writers && writers.length > 0 && (
                                    <div>
                                        <h4 className="font-bold">Writers</h4>
                                        <p className="text-gray-300">{writers.map(w => w.name).join(", ")}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-12">
                {/* Top Cast */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">Top Cast</h2>
                    <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
                        {credits?.cast.slice(0, 10).map((actor) => (
                            <div key={actor.id} className="w-32 md:w-40 shrink-0">
                                <div className="relative aspect-2/3 rounded-lg overflow-hidden bg-gray-800 mb-2">
                                    <Image
                                        src={getProfileUrl(actor.profile_path)}
                                        alt={actor.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="font-semibold text-white text-sm truncate">{actor.name}</h3>
                                <p className="text-xs text-gray-400 truncate">{actor.character}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Details Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-800 pt-8">
                    <div className="md:col-span-2 space-y-8">
                        {/* Reviews */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">Reviews</h2>
                            {reviews?.results.length === 0 ? (
                                <p className="text-gray-400">No reviews yet.</p>
                            ) : (
                                <div className="space-y-6">
                                    {reviews?.results.slice(0, 3).map((review) => (
                                        <div key={review.id} className="bg-gray-900 rounded-lg p-6">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                                                    {review.author[0].toUpperCase()}
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-white">{review.author}</h3>
                                                    <p className="text-xs text-gray-400">
                                                        {new Date(review.created_at).toLocaleDateString()}
                                                    </p>
                                                </div>
                                                {review.author_details.rating && (
                                                    <div className="ml-auto flex items-center gap-1 bg-gray-800 px-2 py-1 rounded">
                                                        <span className="text-yellow-500">★</span>
                                                        <span className="text-white text-sm">{review.author_details.rating}</span>
                                                    </div>
                                                )}
                                            </div>
                                            <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                                                {review.content}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-white">Information</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-sm font-medium text-gray-400">Status</h3>
                                <p className="text-white">{movie.status}</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-400">Budget</h3>
                                <p className="text-white">{formatCurrency(movie.budget)}</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-400">Revenue</h3>
                                <p className="text-white">{formatCurrency(movie.revenue)}</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-400">Production</h3>
                                <div className="flex flex-col gap-1">
                                    {movie.production_companies.map((company) => (
                                        <span key={company.id} className="text-white text-sm">
                                            {company.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Similar Movies */}
                {similar && similar.results.length > 0 && (
                    <section className="border-t border-gray-800 pt-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Recommendations</h2>
                        <MovieGrid movies={similar.results.slice(0, 10)} />
                    </section>
                )}
            </div>
        </div>
    );
}
