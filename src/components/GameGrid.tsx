import React, { useEffect, useState } from 'react'
import apiClients from '../services/api-Clients'
import {Text } from "@chakra-ui/react"
interface Game{
    id: number,
    name:string
}

interface GamesFetched{
    count : number,
    results: Game[]
}

const GameGrid = () => {
    const [error,setError] = useState('')
    const [games , setGames] =useState<Game[]>([])

    useEffect(() =>{
        apiClients
        .get<GamesFetched>('/games')
        .then(res => setGames(res.data.results))
        .catch(err => setError(err.message))
        
    })

  return (
    <>
    {error && <Text color={'red'}>{error}</Text>}
        <ul>
            {games.map(game =><li key={game.id}>{game.name}</li>)}
        </ul>
    </>
  )
}

export default GameGrid