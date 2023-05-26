import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatform'
import { Platform } from '../hooks/useGames'

interface Props {
    onSelectPlatform: (platform: Platform) => void
    selectedPlatform: Platform | null
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {

    const { data, error } = usePlatform()

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}> {selectedPlatform?.name || "Platforms"}</MenuButton>
            <MenuList>
                {data.map((platform) => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector