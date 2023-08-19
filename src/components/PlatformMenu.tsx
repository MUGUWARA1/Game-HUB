import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import {  BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGames'
interface Props{
    onselectPlatfrom : (plat : Platform |null)=> void;
    selectedPLatform: Platform | null
}

const PlatformMenu = ({onselectPlatfrom,selectedPLatform} : Props) => {
    const {Data} = usePlatforms()
  return (
    <Menu>
        <MenuButton  as={Button} rightIcon={<BsChevronDown/>}>{selectedPLatform?.name|| "Platforms"}</MenuButton>
        <MenuList>
            {Data.map(plat=><MenuItem onClick={()=>onselectPlatfrom(plat)} key={plat.id}>{plat.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformMenu