
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';


const GameGrid = () => {

    const { games, error, isLoading } = useGames();
    console.log("THE LOG OF GAMES : :", games)
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding={10}>
                {isLoading && skeletons.map(skeleton => <GameCardSkeleton></GameCardSkeleton>)}
                {games.map((games) =>
                    // <li key={games.id}>{games.name}</li>
                    <GameCard key={games.id} gamersss={games}></GameCard>
                )}
            </SimpleGrid>
        </>
    )
}

export default GameGrid