import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

/** Represents a single game from the API. */
interface Game {
  id: number;
  name: string;
}

/** Response format for the GET /games API call. */
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

/**
 * Fetches and displays a list of games from RAWG API.
 *
 * - Uses axis to send a GET request.
 * - Shows error if request fails.
 * - Maps the game list.
 */
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((response) => setGames(response.data.results))
      .catch((error) => setError(error.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
