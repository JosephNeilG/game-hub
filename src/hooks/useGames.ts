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
 * @param selectedGenre - The genre selected, null if none.
 * @param selectedPLatform - The platform selected, null if none.
 */
const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id, // optional
        platforms: selectedPlatform?.id, // optional
      },
    },
    [selectedGenre?.id, selectedPlatform?.id] // refetch if filters change
  );

export default useGames;
