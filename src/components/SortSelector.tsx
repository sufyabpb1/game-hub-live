import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Sort</MenuButton>
            <MenuList>
                <MenuItem>Sort BY</MenuItem>
                <MenuItem>Sort List</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default SortSelector