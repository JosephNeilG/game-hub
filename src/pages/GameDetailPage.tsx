import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  // extract slug from URL
  const { slug } = useParams();
  // custom hook to fetch game data using slug
  const { data: game, isLoading, error } = useGame(slug!); // append !: this will never be null

  if (isLoading) return <Spinner />;
  if (error || !game) throw error; // if error or no game, throw error (no need for optional chaining "?")

  // s: single col
  // md: grid with 2 cols

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
