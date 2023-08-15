import { Card, CardBody, Heading, Image,HStack } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import IconList from './IconList'
import MetacriticIcon from './MetacriticIcon'

interface Props
{
    game : Game
}
const GameCard = ({game}:Props) => {
  return (
    <Card borderRadius={10} overflow='hidden' >
        <Image src={game.background_image}></Image>
        <CardBody>
            <Heading fontSize={"2xl"}>{game.name}</Heading>
            <HStack justifyContent={'space-between'}>
                <IconList platforms={game.parent_platforms.map(p => p.platform)}></IconList>
                <MetacriticIcon score={game.metacritic}></MetacriticIcon>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard