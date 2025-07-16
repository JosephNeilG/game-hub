import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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
  parent_platforms: { platform: Platform}[];
  metacritic: number;
}

/** Response format for the GET /games API call. */
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

/**
 * @description Custom hook to fetch and return list of games from API.
 * - Cancels request on unmount using AbortController.
 * - Returns error message if request fails.
 * @returns An object containing the list of games and an error message if any.
 */
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((response) => setGames(response.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
