
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';


const GameGrid = () => {

    const { games, error } = useGames();
    console.log("THE LOG OF GAMES : :", games)
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding={10}>
                {games.map((games) =>
                    // <li key={games.id}>{games.name}</li>
                    <GameCard key={games.id} gamersss={games}></GameCard>
                )}
            </SimpleGrid>
        </>
    )
}

export default GameGrid