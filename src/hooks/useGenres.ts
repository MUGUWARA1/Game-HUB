
import genres from '../Data/genres'
export interface Genre{
    id:number,
    name:string;
    image_background:string
}
const useGenres =()=>({Data:genres , loading :false ,error:null});
    


export default useGenres