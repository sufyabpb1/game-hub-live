import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'
import GenreListSkeleton from './GenreListSkeleton'


interface Props {
    onSelectGenre: (genre: Genre) => void
    selectedGenre: Genre | null
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, isLoading } = useGenres()
    console.log("INSIDE THE GENRELIST  : : : ", data)
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 5, 6, 7]
    // if (isLoading) return <Spinner />
    return (
        <>
            {isLoading && skeletons.map(skeleton => <GenreListSkeleton key={skeleton}></GenreListSkeleton>)}
            <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
            <List>
                {data.map((genre) =>
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image objectFit="cover" boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)}></Image>
                            <Button whiteSpace="normal" textAlign="left" fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} onClick={() => onSelectGenre(genre)} fontSize="lg" variant="link">{genre.name}</Button>
                        </HStack>
                    </ListItem>)
                }
            </List>
        </>
    )
}

export default GenreList