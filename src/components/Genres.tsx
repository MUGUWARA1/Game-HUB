import useGenres from "../hooks/useGenres"

const Genres = () => {
    const {genres,error,loading}= useGenres()
  return (
    <ul>
        {genres.map(genre =><li key={genre.id}>{genre.name}</li>)}
    </ul>
    )
}

export default Genres