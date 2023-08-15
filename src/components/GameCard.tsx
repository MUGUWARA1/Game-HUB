import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import IconList from './IconList'

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
            <IconList platforms={game.parent_platforms.map(p => p.platform)}></IconList>
        </CardBody>
    </Card>
  )
}

export default GameCard