import useData from "./useData";
import type { Genre } from "./useGenres";

/** Represents a platform. */
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
/** Represents a single game from the API. */
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

/**
 * Custom hook to fetch games list from API.
 * @param selectedGenre - The genre selected by user, null if none.
 */
const useGames = (selectedGenre: Genre | null) => useData<Game>("/games", {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);

export default useGames;
