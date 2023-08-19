import { Image, ImageProps } from "@chakra-ui/react"
import bulleye from '../assets/bulls-eye.webp'
import meh from '../assets/meh.webp'
import thumbup from '../assets/thumbs-up.webp'

interface Props{
    rating:number
}
const Emoji = ({rating}:Props) => {
    if (rating<3) return null

    const EmojiMap :{[key:number]: ImageProps} ={
        3:{src:meh ,alt:'meh',boxSize:'25px'},
        4:{src:thumbup ,alt:'Good',boxSize:'25px'},
        5:{src:bulleye ,alt:'Expecionelle',boxSize:'35px'}
        
    }
  return (
    <Image marginTop={2}  {...EmojiMap[rating]}></Image>
  )
}

export default Emoji