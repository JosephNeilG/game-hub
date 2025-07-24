import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";

const GameDetailPage = () => {
  // extract slug from URL
  const { slug } = useParams();
  // custom hook to fetch game data using slug
  const { data: game, isLoading, error } = useGame(slug!); // append !: this will never be null

  if (isLoading) return <Spinner />;
  if (error || !game) throw error; // if error or no game, throw error (no need for optional chaining "?")

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
