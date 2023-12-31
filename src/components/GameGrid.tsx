import {  SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GamecardSkeleton from "./GamecardSkeleton";
import GameCardContainer from "./GameCardContainer";
import useGames from "../hooks/useGames";
import { GameQuery } from "../App";

interface Props{
  gameQuery : GameQuery
}

const GameGrid = ({gameQuery}:Props) => {
  const { Data, error, loading } = useGames(gameQuery);
  const sekelton = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (error) return<Text color={"red"}>{error}</Text>

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
      spacing={6}
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
          <GameCard  key={game.id} game={game}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
