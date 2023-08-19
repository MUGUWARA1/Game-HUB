import { HStack , Image,Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/logo.webp"
import SwitchColorMode from './SwitchColorMode'
import SearchInput from './SearchInput'



const NavBar = () => {
  return (
    <HStack padding='10px'>
        <Image src={logo} boxSize={"70px"}></Image>
        <SearchInput/>
        <SwitchColorMode ></SwitchColorMode>
    </HStack>
  )
}

export default NavBar