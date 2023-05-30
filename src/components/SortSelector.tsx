import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
    const sortOrders = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Date Added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Released Date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average Rating" },
    ]
    const currentSortOrder = sortOrders.find(o => o.value === sortOrder)
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order By-{currentSortOrder?.label || "Relvance"}</MenuButton>
            <MenuList>
                {sortOrders.map((order: any) => (<MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>))}
            </MenuList>
        </Menu>
    )
}

export default SortSelector