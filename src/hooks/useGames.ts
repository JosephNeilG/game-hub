import type { GameQuery } from "../App";
import useData from "./useData";

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
 * Accepts a gameQuery object with optional filters.
 */
const useGames = (
  gameQuery: GameQuery
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id, // optional
        platforms: gameQuery.platform?.id, // optional
      },
    },
    [gameQuery] // refetch if query object changes
  );

export default useGames;
