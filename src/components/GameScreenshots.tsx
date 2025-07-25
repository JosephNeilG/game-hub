import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} marginY={5} spacing={2}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} borderRadius={5}></Image>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
