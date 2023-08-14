import { HStack , Image,Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/logo.webp"
import SwitchColorMode from './SwitchColorMode'



const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'}>
        <Image src={logo} boxSize={"70px"}></Image>
        <SwitchColorMode ></SwitchColorMode>
    </HStack>
  )
}

export default NavBar