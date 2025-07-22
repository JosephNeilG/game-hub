import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

/** DIsplays dynamic title based on platform or genre */
const GameHeading = ({ gameQuery }: Props) => {
  // Fetch genre data: find genre object that matches selected genreId in gameQuery
  const { data: genres } = useGenres();
  const genre = genres?.results.find((genre) => genre.id === gameQuery.genreId);

  // Fetch platform data: find platform object that matches selected platformId in gameQuery
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (platform) => platform?.id === gameQuery.platformId
  );

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
