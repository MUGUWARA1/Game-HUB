import axios from "axios";


export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key: '2bb49ff6a0a344c69dda15e4cb7c1c59'
}})