import platforms from "../data/platforms";

/** Represents gaming platform. */
interface Platform {
  id: number;
  name: string;
  slug: string;
}

/** Custom hook to fetch parent platform data. */
const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

export default usePlatforms;
