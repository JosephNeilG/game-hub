import useGenres from "./useGenres";

// Fetch genre data: find genre object that matches elected genreId in gameQuery
const useGenre = (id?: number) => {
  const { data: genres } = useGenres();
  return genres?.results.find((genre) => genre.id === id);
};

export default useGenre;
