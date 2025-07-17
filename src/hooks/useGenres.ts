import genres from "../data/genres"
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
const useGenres = () => ({data: genres, isLoading: false, error: null});

export default useGenres;
