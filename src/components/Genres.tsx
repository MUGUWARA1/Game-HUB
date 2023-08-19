import useGenres, { Genre } from "../hooks/useGenres";
import {
  HStack,
  List,
  ListItem,
  Text,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import getCroppedImage from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const Genres = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { Data, error, loading } = useGenres();
  if (loading) return <Spinner />;
  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      {error && <Text color={"red"}>{error}</Text>}
      <List>
        {Data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize="32px"
                src={getCroppedImage(genre.image_background)}
                borderRadius={8}
                objectFit='cover'
              ></Image>
              <Button
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                onClick={() => onSelectedGenre(genre)}
                variant="link"
                fontSize={"lg"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Genres;
