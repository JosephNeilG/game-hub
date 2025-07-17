import useData from "./useData";

/** Represents gaming platform. */
interface Platform {
  id: number;
  name: string;
  slug: string;
}

/** Custom hook to fetch parent platform data. */
const usePlatforms = () => useData<Platform>("/platforms/lists/parents")

export default usePlatforms;
