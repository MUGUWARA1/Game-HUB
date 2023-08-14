import { useEffect, useState } from "react"
import apiClients from "../services/api-Clients"
import { CanceledError } from "axios"

interface Game{
    id: number,
    name:string
}

interface GamesFetched{
    count : number,
    results: Game[]
}

const useGames =()=>{
    const [error,setError] = useState('')
    const [games , setGames] =useState<Game[]>([])
    
    useEffect(() =>{
            const controller = new AbortController()
            apiClients
                .get<GamesFetched>('/games',{signal:controller.signal})
                .then(res => setGames(res.data.results))
                .catch(err => 
                {if (err instanceof CanceledError) return;
                setError(err.message)
            })
            
            return ()=>controller.abort()
            
        },[])
    
    return {games,error}
}

export default useGames