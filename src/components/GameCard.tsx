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
        <Card width="300px" borderRadius={10} overflow="hidden">
            <Image src={getCroppedImageUrl(gamersss.background_image)}></Image>
            <CardBody>
                <Heading fontSize="2xl">{gamersss.name}</Heading>
                <HStack justifyContent="space-between">
                    <PlatformIconList platforms={gamersss.parent_platforms.map(p => p.platform)}></PlatformIconList>
                    <CriticScore score={gamersss.metacritic}></CriticScore>
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard