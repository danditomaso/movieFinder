import { useQuery } from "react-query";
import { fetchMovieByResource } from "@/utils/index";

export function useGetPopularMovies(initialData = {}) {
  const { data } = useQuery(
    "getPopularMovies",
    () => fetchMovieByResource("/popular"),
    initialData
  );
  return data;
}
