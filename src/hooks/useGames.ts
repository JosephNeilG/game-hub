import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { type FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
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

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId, // optional
          parent_platforms: gameQuery.platformId, // optional
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"), //24hrs
  });
};

export default useGames;
