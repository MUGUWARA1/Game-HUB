import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

interface Props{
    onSortSelect:(sortOrder :string)=>void;
    sortOrder: string
}
const SortSelector = ({onSortSelect,sortOrder}:Props) => {
    const sortOerders = [
        {value :'' , label :'Relevance'},
        {value :'-added' , label :'Date added'},
        {value :'name' , label :'Name'},
        {value :'-released' , label :'Release date'},
        {value :'-metacritic' , label :'Popularity'},
        {value :'-rating' , label :'Average rating'}
        
    ]
    const currentLabelOrder = sortOerders.find(o => o.value=== sortOrder )
    return (
    <Menu>
        <MenuButton  as={Button} rightIcon={<BsChevronDown/>}>Ordred : By {currentLabelOrder?.label || 'Relevance'}</MenuButton>
        <MenuList>
            {sortOerders.map(order =><MenuItem onClick={()=>onSortSelect(order.value)} value={order.value} key={order.value}>{order.label}</MenuItem>)}            
        </MenuList>
    </Menu>
  )
}

export default SortSelector