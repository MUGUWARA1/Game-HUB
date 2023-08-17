import { Center, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GamecardSkeleton from "./GamecardSkeleton";
import GameCardContainer from "./GameCardContainer";
import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";

interface Props{
  selectedGenre : Genre | null
}

const GameGrid = ({selectedGenre}:Props) => {
  const { Data, error, loading } = useGames(selectedGenre);
  const sekelton = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {error && <Text color={"red"}>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={4}
        padding={"10px"}
        justifyContent={"Center"}
      >
        {loading &&
          sekelton.map((sk) => (
            <GameCardContainer key={sk}>
              <GamecardSkeleton></GamecardSkeleton>
            </GameCardContainer>
          ))}
        {Data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard key={game.id} game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
