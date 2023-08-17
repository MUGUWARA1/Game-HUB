import useGenres from "../hooks/useGenres"
import {Text} from "@chakra-ui/react"

const Genres = () => {
    const {Data,error}= useGenres()
  return (
    <>
      {error && <Text color={"red"}>{error}</Text>}
      <ul>
          {Data.map(genre =><li key={genre.id}>{genre.name}</li>)}
      </ul>
    </>
    )
}

export default Genres