import { useEffect, useState } from "react"
import apiClients from "../services/api-Clients"
import { CanceledError } from "axios"

export interface Platform{
    id:number;
    name : string;
    slug : string
}
export interface Game{
    id: number;
    name:string;
    background_image: string;
    parent_platforms :{ platform: Platform  }[];
    metacritic: number

}

interface GamesFetched{
    count : number,
    results: Game[]
}

const useGames =()=>{
    const [error,setError] = useState('')
    const [games , setGames] =useState<Game[]>([])
    const [loading , setLoading] =useState(false)
    
    useEffect(() =>{
            setLoading(true)
            const controller = new AbortController()
            apiClients
                .get<GamesFetched>('/games',{signal:controller.signal})
                .then(res => {setGames(res.data.results);
                setLoading(false)})
                .catch(err => 
                {if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false)
            })
            
            return ()=>controller.abort()
            
        },[])
    
    return {games,error,loading}
}

export default useGames