import { HStack, Switch,useColorMode ,Text} from '@chakra-ui/react'
import React from 'react'

const SwitchColorMode = () => {

  const {toggleColorMode,colorMode} = useColorMode()
  return (
    <HStack padding={'20px'}>
      <Switch isChecked={colorMode==='dark'} onChange={toggleColorMode} colorScheme='blue'></Switch>
      <Text whiteSpace='nowrap'>Dark mode</Text>
    </HStack>
  )
}

export default SwitchColorMode