import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"

function App() {

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"` //1024
    }}>
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">Aside</GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">main</GridItem>
    </Grid>
  )
}

export default App
