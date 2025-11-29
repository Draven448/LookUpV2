"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Movie } from "@/types/movie";
import { getPosterUrl, formatYear, formatRating } from "@/lib/utils";

interface MovieCardProps {
    movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
    const posterUrl = getPosterUrl(movie.poster_path);
    const year = formatYear(movie.release_date);
    const rating = formatRating(movie.vote_average);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [error, setError] = useState(false);

    return (
        <Link
            href={`/movie/${movie.id}`}
            className="group block transition-transform duration-300 hover:scale-105"
        >
            <div className="relative aspect-2/3 overflow-hidden rounded-lg bg-gray-800 shadow-lg">
                <div className={`absolute inset-0 bg-gray-800 animate-pulse ${imageLoaded ? 'hidden' : 'block'}`} />
                <Image
                    src={error ? "/placeholder-movie.png" : posterUrl}
                    alt={movie.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    className={`object-cover transition-opacity duration-300 group-hover:opacity-75 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    priority={false}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setError(true)}
                />

                {/* Rating Badge */}
                <div className="absolute top-2 right-2 flex items-center space-x-1 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-md">
                    <svg
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-semibold text-white">{rating}</span>
                </div>
            </div>

            {/* Movie Info */}
            <div className="mt-2 space-y-1">
                <h3 className="text-sm font-medium text-white line-clamp-2 group-hover:text-blue-400 transition-colors">
                    {movie.title}
                </h3>
                <p className="text-xs text-gray-400">{year}</p>
            </div>
        </Link>
    );
}
