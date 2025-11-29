import { Movie } from "@/types/movie";
import { MovieCard } from "@/components/ui/movie-card";

interface MovieGridProps {
    movies: Movie[];
}

export function MovieGrid({ movies }: MovieGridProps) {
    if (movies.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-400">No movies found</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}
