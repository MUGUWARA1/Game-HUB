import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import Genres from "./components/Genres";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformMenu from "./components/PlatformMenu";
import { Platform } from "./hooks/useGames";
function App() {
  const [selectedGenre , setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform,setSelectedPlatform]= useState<Platform | null>(null)
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
          <Genres selectedGenre={selectedGenre} onSelectedGenre={(genre)=>setSelectedGenre(genre)}></Genres>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformMenu selectedPLatform={selectedPlatform} onselectPlatfrom={(plat)=>setSelectedPlatform(plat)}></PlatformMenu>
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
