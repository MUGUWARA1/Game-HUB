import { HStack , Image,Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/logo.webp"



const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize={"70px"}></Image>
        <Text>nav bar</Text>
    </HStack>
  )
}

export default NavBar