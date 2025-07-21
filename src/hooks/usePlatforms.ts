import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import type { FetchResponse } from "./useData";

/** Represents gaming platform. */
interface Platform {
  id: number;
  name: string;
  slug: string;
}

/** Custom hook to fetch parent platform data. */
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((response) => response.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
