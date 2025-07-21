import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import type { FetchResponse } from "./useData";
/** Represents a single genre object. */
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

/**
 * Custom hook to fetch genres.
 * @returns Genre, loading, error state.
 */
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>("/genres")
        .then((response) => response.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
