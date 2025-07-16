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
 * @returns Game, loading, error state.
 */
const useGames = () => useData<Game>("/games");

export default useGames;
