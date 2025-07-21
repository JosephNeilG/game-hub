import { useQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import APIClient from "../services/api-client";
import type { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>("/games");

/** Represents a single game from the API. */
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id, // optional
          parent_platforms: gameQuery.platform?.id, // optional
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGames;
