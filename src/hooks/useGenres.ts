import useData from "./useData";

/** Represents a single genre object. */
export interface Genre {
  id: number;
  name: string;
}

/**
 * Custom hook to fetch genres.
 * @returns Genre, loading, error state.
 */
const useGenres = () => useData<Genre>("/genres");

export default useGenres;
