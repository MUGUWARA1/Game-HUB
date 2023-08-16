import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import Genres from './components/Genres'
function App() {

  return (
    <Grid templateAreas={{ base:`"nav" "main"`,lg: `"nav nav " "aside main"`}}>
      <GridItem area={"nav"} >
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} ><Genres></Genres></GridItem>
      </Show>
      <GridItem area={"main"} >
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  )
}

export default App
