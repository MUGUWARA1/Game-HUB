import {Center, SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import GamecardSkeleton from "./GamecardSkeleton"


const GameGrid = () => {
   const {games,error,loading} = useGames()
   const sekelton =[0,1,2,3,4,5,6,7,8,9]

  return (
    <>
    {error && <Text color={'red'}>{error}</Text>}
        <SimpleGrid columns={{sm:1 , md:2 , lg:3 ,xl:4}} spacing={10} padding={'10px'} justifyContent={'Center'}>
            {loading && sekelton.map(sk=><GamecardSkeleton></GamecardSkeleton>)}
            {games.map(game =><GameCard  key={game.id} game={game} ></GameCard>)}
        </SimpleGrid>
    </>
  )
}

export default GameGrid