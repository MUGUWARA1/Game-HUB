import { Button, ButtonGroup, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import Genres from "./components/Genres";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformMenu from "./components/PlatformMenu";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery{
  genre: Genre |null;
  platform : Platform | null
}
function App() {
  
  const [gameQuery,setGameQuery] = useState({} as GameQuery)

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav " "aside main"` }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <Genres selectedGenre={gameQuery.genre} onSelectedGenre={(genre)=>setGameQuery({...gameQuery,genre})}></Genres>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HStack spacing={5} paddingLeft={2} marginBottom={8}>
          <PlatformMenu selectedPLatform={gameQuery.platform} onselectPlatfrom={(plat)=>setGameQuery({...gameQuery,platform:plat})}></PlatformMenu>
          <SortSelector></SortSelector>
        </HStack>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
