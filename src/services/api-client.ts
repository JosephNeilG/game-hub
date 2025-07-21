import axios from "axios";

/** Generic response structure from the API. */
export interface FetchResponse<T> {
  count: number;
  results: T[];
}

/**
 * Preconfigured axios instance or rawg API
 * - Sets base URL and includes API key in all requests.
 */
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2e59c486b0054dfd957dcd2784d8be5c",
  },
});
