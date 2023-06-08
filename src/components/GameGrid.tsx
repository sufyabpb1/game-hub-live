
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { Genre } from '../hooks/useGenres';
import { GameQuery } from '../App';

interface Props {
    gameQuery: GameQuery
    // selectedGenre: Genre | null          Removing these to use the GameQuery
    // selectedPlatform: Platform | null
}

// const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {   // Before we were passing 2 now we are passing only gameQuery to make it more dynamic


const GameGrid = ({ gameQuery }: Props) => {


    const { data, error, isLoading } = useGames(gameQuery);
    console.log("THE LOG OF GAMES : :", data)
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} padding={3}>
                {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}></GameCardSkeleton>)}
                {data.map((games) =>
                    // <li key={games.id}>{games.name}</li>
                    <GameCard key={games.id} gamersss={games}></GameCard>
                )}
            </SimpleGrid>
        </>
    )
}

export default GameGrid