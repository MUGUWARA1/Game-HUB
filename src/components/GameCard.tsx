import { Card, CardBody, Heading, Image,HStack } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import IconList from './IconList'
import MetacriticIcon from './MetacriticIcon'
import getCroppedImage from '../services/image-url'


interface Props
{
    game : Game
}
const GameCard = ({game}:Props) => {
  return (
    <Card>
        <Image src={getCroppedImage(game.background_image)}></Image>
        <CardBody>
            <HStack justifyContent={'space-between'} marginBottom={3}>
                <IconList platforms={game.parent_platforms.map(p => p.platform)}></IconList>
                <MetacriticIcon score={game.metacritic}></MetacriticIcon>
            </HStack>
            <Heading fontSize={"2xl"}>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard