import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGames"


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null
}

function App() {

  // Now removing the below states to create a dynamic State using interface

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null) // using this to share the state,value will be passed as which genre is selected
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null) //

  // Adding this state in place of the above 2

  const [gameQuery, SetGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"` //1024
    }}
      templateColumns={{
        base: '1fr',
        lg: "200px 1fr"
      }}>

      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}><GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => SetGameQuery({ ...gameQuery, genre })}></GenreList></GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => SetGameQuery({ ...gameQuery, platform })}></PlatformSelector>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  )
}

export default App
