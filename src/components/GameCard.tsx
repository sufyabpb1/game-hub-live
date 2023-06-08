import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'

interface Props {
    gamersss: Game
}

const GameCard = ({ gamersss }: Props) => {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={getCroppedImageUrl(gamersss.background_image)}></Image>
            <CardBody>
                <HStack justifyContent="space-between" marginBottom={3}>
                    <PlatformIconList platforms={gamersss.parent_platforms.map(p => p.platform)}></PlatformIconList>
                    <CriticScore score={gamersss.metacritic}></CriticScore>
                </HStack>
                <Heading fontSize="2xl">{gamersss.name}</Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard