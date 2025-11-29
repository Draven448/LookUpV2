"use client";

import { useQuery } from "@tanstack/react-query";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/tmdb";
import { MovieGrid } from "@/components/movie/movie-grid";
import { MovieGridSkeleton } from "@/components/ui/loading-skeleton";
import { ErrorMessage } from "@/components/ui/error-message";
import Link from "next/link";

function MovieSection({
  title,
  queryKey,
  queryFn,
  viewAllHref,
}: {
  title: string;
  queryKey: string;
  queryFn: () => Promise<any>;
  viewAllHref: string;
}) {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [queryKey],
    queryFn,
  });

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
        <Link
          href={viewAllHref}
          className="text-sm md:text-base text-blue-400 hover:text-blue-300 transition-colors font-medium"
        >
          View All →
        </Link>
      </div>

      {isLoading && <MovieGridSkeleton count={10} />}

      {error && (
        <ErrorMessage
          message={error instanceof Error ? error.message : "Failed to load movies"}
          onRetry={() => refetch()}
        />
      )}

      {data && <MovieGrid movies={data.results.slice(0, 10)} />}
    </section>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-8 md:py-12">
      {/* Hero Section */}
      <div className="mb-12 md:mb-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Discover Your Next Favorite Movie
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Explore thousands of movies, from timeless classics to the latest releases
          </p>
        </div>
      </div>

      {/* Popular Movies */}
      <MovieSection
        title="Popular Movies"
        queryKey="popular-movies"
        queryFn={() => getPopularMovies(1)}
        viewAllHref="/popular"
      />

      {/* Top Rated Movies */}
      <MovieSection
        title="Top Rated"
        queryKey="top-rated-movies"
        queryFn={() => getTopRatedMovies(1)}
        viewAllHref="/top-rated"
      />

      {/* Upcoming Movies */}
      <MovieSection
        title="Coming Soon"
        queryKey="upcoming-movies"
        queryFn={() => getUpcomingMovies(1)}
        viewAllHref="/upcoming"
      />
    </div>
  );
}
