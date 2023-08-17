import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import {  BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'

const PlatformMenu = () => {
    const {Data} = usePlatforms()
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Platforms</MenuButton>
        <MenuList>
            {Data.map(plat=><MenuItem key={plat.id}>{plat.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformMenu