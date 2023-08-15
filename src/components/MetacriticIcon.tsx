import { Badge } from "@chakra-ui/react"


interface Props{
    score : number
}
const MetacriticIcon = ({score}: Props) => {
        let scoreColor = score>75? 'green':score>60?'yellow' : 'red'  
    
  return (
    <Badge colorScheme={scoreColor} paddingX={'10px'} fontSize={"15px"} >{score}</Badge>
    
  )
}

export default MetacriticIcon