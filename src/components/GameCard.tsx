import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'

interface Props {
    gamersss: Game
}

const GameCard = ({ gamersss }: Props) => {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={gamersss.background_image}></Image>
            <CardBody>
                <Heading fontSize="2xl">{gamersss.name}</Heading>
                <PlatformIconList platforms={gamersss.parent_platforms.map(p => p.platform)}></PlatformIconList>
            </CardBody>
        </Card>
    )
}

export default GameCard