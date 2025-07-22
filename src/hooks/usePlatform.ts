import usePlatforms from "./usePlatforms";

// Fetch platform data: find platform object that matches selected platformId in gameQuery
const usePlatform = (id?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((platform) => platform?.id === id);
};

export default usePlatform;
