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
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = () => {
  // get current game query filters from zustand
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    // unique cache key, also includes current filters
    queryKey: ["games", gameQuery],
    // function to etch games; uses pageParam to load paginated results
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
    // determine the next page load if available
    getNextPageParam: (lastPage, allPages) => {
      // if API response has a next page link, return next page number
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"), // cache data for 24h
  });
};

export default useGames;
