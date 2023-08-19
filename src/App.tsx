import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import Genres from "./components/Genres";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformMenu from "./components/PlatformMenu";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import HeadingComponents from "./components/HeadingComponents";

export interface GameQuery{
  genre: Genre |null;
  platform : Platform | null;
  Order: string
  search : string
}
function App() {
  
  const [gameQuery,setGameQuery] = useState({} as GameQuery)

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav " "aside main"` }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}>
      <GridItem area={"nav"}>
        <NavBar onSearch={(search)=>setGameQuery({...gameQuery,search})}></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <Genres selectedGenre={gameQuery.genre} onSelectedGenre={(genre)=>setGameQuery({...gameQuery,genre})}></Genres>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <HeadingComponents gameQuery={gameQuery}/>
          <Flex  marginBottom={8}>
            <Box marginRight={5}>
              <PlatformMenu selectedPLatform={gameQuery.platform} onselectPlatfrom={(plat)=>setGameQuery({...gameQuery,platform:plat})}></PlatformMenu>
            </Box>
            <SortSelector sortOrder={gameQuery.Order} onSortSelect={(Order)=>setGameQuery({...gameQuery,Order})}></SortSelector>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
