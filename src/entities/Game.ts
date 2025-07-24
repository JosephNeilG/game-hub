import type { Genre } from "./Genre";
import type { Platform } from "./Platform";
import type { Publisher } from "./Publisher";

/** Represents a single game from the API. */
export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
