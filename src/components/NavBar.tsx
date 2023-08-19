import { HStack , Image } from '@chakra-ui/react'
import logo from "../assets/logo.webp"
import SwitchColorMode from './SwitchColorMode'
import SearchInput from './SearchInput'

interface Props{
  onSearch:(search:string)=> void
}

const NavBar = ({onSearch}:Props) => {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize={"70px"}></Image>
      <SearchInput onSearch={(search)=>onSearch(search)}/>
      <SwitchColorMode ></SwitchColorMode>
    </HStack>
  )
}

export default NavBar