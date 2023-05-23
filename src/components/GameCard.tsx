import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'

interface Props {
    gamersss: Game
}

const GameCard = ({ gamersss }: Props) => {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={gamersss.background_image}></Image>
            <CardBody>
                <Heading fontSize="2xl">{gamersss.name}</Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard