import { useQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import apiClient from "../services/api-client";
import type { FetchResponse } from "../services/api-client";

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
 * @param gameQuery - Contains selected genre, platform, sort order, and search test..
 * @returns Query result for games.
 */
const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id, // optional
            parent_platforms: gameQuery.platform?.id, // optional
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((response) => response.data),
  });

export default useGames;
