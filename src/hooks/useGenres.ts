import { useEffect, useState } from "react"
import apiClients from "../services/api-Clients"
import { CanceledError } from "axios"
interface GenresFetched{
    count:number,
    results:Genre[]
}
interface Genre{
    id:number,
    name:string
}
const useGenres =()=>{
    const [error,setError] = useState('')
    const [genres , setGenres] =useState<Genre[]>([])
    const [loading , setLoading] =useState(false)
    
    useEffect(() =>{
            setLoading(true)
            const controller = new AbortController()
            apiClients
                .get<GenresFetched>('/genres',{signal:controller.signal})
                .then(res => {setGenres(res.data.results);
                setLoading(false)})
                .catch(err => 
                {if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false)
            })
            
            return ()=>controller.abort()
            
        },[])
    
    return {genres,error,loading}
}

export default useGenres