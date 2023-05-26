
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { Genre } from '../hooks/useGenres';

interface Props {
    selectedGenre: Genre | null
    selectedPlatform: Platform | null
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {

    const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
    console.log("THE LOG OF GAMES : :", data)
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding={3}>
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