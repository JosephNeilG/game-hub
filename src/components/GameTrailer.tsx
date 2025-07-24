import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

/** Component to show the trailer of a game. */
const GameTrailer = ({ gameId }: Props) => {
  // fetch trailers using custom hook
  const { data, isLoading, error } = useTrailers(gameId);
  //   data?.count !== 0 ? console.log(data) : console.log("no trailer available");

  if (isLoading) return null;

  if (error) throw error;

  // get first trailer from the result list
  const first = data?.results[0];

  // if exists, render video. otherwise, return null
  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
