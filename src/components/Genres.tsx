import useGenres from "../hooks/useGenres"
import {HStack, List, ListItem, Text,Image, Spinner} from "@chakra-ui/react"
import getCroppedImage from "../services/image-url"

const Genres = () => {
    const {Data,error,loading}= useGenres()
    if(loading) return <Spinner/>
  return (
    <>
      {error && <Text color={"red"}>{error}</Text>}
      <List>
          {Data.map(genre =>
          <ListItem key={genre.id} paddingY={'5px'}>
            <HStack>
              <Image boxSize='32px' src={getCroppedImage(genre.image_background)} borderRadius={8}></Image>
            <Text fontSize={"lg"}>{genre.name}</Text>
            </HStack>
            </ListItem>)}
      </List>
    </>
    )
}

export default Genres