import axios, { type AxiosRequestConfig } from "axios";

/** Generic response structure from the API. */
export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2e59c486b0054dfd957dcd2784d8be5c",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((response) => response.data);
  };

  get = (id: string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id) // fetch from /games/{slug}
      .then((response) => response.data);
  };
}

export default APIClient;
