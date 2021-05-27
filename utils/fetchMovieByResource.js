import { fetcher } from "@/utils/fetcher";

export const fetchMovieByResource = async (resource = "/popular", pageNum = "1") => {
  return fetcher(
    `https://api.themoviedb.org/3/movie${resource}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${pageNum}`
  );
};
