import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";

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
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
