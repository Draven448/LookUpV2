import {
  Movie,
  MovieDetails,
  MoviesResponse,
  Credits,
  ReviewsResponse,
  GenresResponse,
} from "@/types/movie";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL || "https://api.themoviedb.org/3";

/**
 * Base fetch wrapper with error handling
 */
async function tmdbFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  if (!API_KEY) {
    throw new Error("TMDB API key is not configured");
  }

  const url = `${BASE_URL}${endpoint}${endpoint.includes("?") ? "&" : "?"}api_key=${API_KEY}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({
      status_message: "An error occurred",
    }));
    throw new Error(error.status_message || `HTTP error! status: ${response.status}`);
  }

  return response.json();
}

/**
 * Get popular movies
 */
export async function getPopularMovies(page: number = 1): Promise<MoviesResponse> {
  return tmdbFetch<MoviesResponse>(`/movie/popular?page=${page}`);
}

/**
 * Get top-rated movies
 */
export async function getTopRatedMovies(page: number = 1): Promise<MoviesResponse> {
  return tmdbFetch<MoviesResponse>(`/movie/top_rated?page=${page}`);
}

/**
 * Get upcoming movies
 */
export async function getUpcomingMovies(page: number = 1): Promise<MoviesResponse> {
  return tmdbFetch<MoviesResponse>(`/movie/upcoming?page=${page}`);
}

/**
 * Get now playing movies
 */
export async function getNowPlayingMovies(page: number = 1): Promise<MoviesResponse> {
  return tmdbFetch<MoviesResponse>(`/movie/now_playing?page=${page}`);
}

/**
 * Get movie details by ID
 */
export async function getMovieDetails(movieId: number): Promise<MovieDetails> {
  return tmdbFetch<MovieDetails>(`/movie/${movieId}`);
}

/**
 * Get movie credits (cast and crew)
 */
export async function getMovieCredits(movieId: number): Promise<Credits> {
  return tmdbFetch<Credits>(`/movie/${movieId}/credits`);
}

/**
 * Get movie reviews
 */
export async function getMovieReviews(
  movieId: number,
  page: number = 1
): Promise<ReviewsResponse> {
  return tmdbFetch<ReviewsResponse>(`/movie/${movieId}/reviews?page=${page}`);
}

/**
 * Get similar movies
 */
export async function getSimilarMovies(
  movieId: number,
  page: number = 1
): Promise<MoviesResponse> {
  return tmdbFetch<MoviesResponse>(`/movie/${movieId}/similar?page=${page}`);
}

/**
 * Search movies by query
 */
export async function searchMovies(query: string, page: number = 1): Promise<MoviesResponse> {
  const encodedQuery = encodeURIComponent(query);
  return tmdbFetch<MoviesResponse>(`/search/movie?query=${encodedQuery}&page=${page}`);
}

/**
 * Get all movie genres
 */
export async function getGenres(): Promise<GenresResponse> {
  return tmdbFetch<GenresResponse>("/genre/movie/list");
}

/**
 * Discover movies by genre
 */
export async function discoverMoviesByGenre(
  genreId: number,
  page: number = 1
): Promise<MoviesResponse> {
  return tmdbFetch<MoviesResponse>(`/discover/movie?with_genres=${genreId}&page=${page}`);
}

/**
 * Get trending movies (day or week)
 */
export async function getTrendingMovies(
  timeWindow: "day" | "week" = "week",
  page: number = 1
): Promise<MoviesResponse> {
  return tmdbFetch<MoviesResponse>(`/trending/movie/${timeWindow}?page=${page}`);
}
