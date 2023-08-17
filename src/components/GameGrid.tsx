import { Center, SimpleGrid, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import GameCard from "./GameCard";
import GamecardSkeleton from "./GamecardSkeleton";
import GameCardContainer from "./GameCardContainer";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { Data, error, loading } = useGames();
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
            <GameCardContainer>
              <GamecardSkeleton></GamecardSkeleton>
            </GameCardContainer>
          ))}
        {Data.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
