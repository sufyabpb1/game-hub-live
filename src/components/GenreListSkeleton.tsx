import { List, ListItem, HStack, Skeleton, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const GenreListSkeleton = () => {
    return (
        <List>

            <ListItem paddingY="5px">
                <HStack>
                    <Skeleton boxSize="32px" borderRadius={8} />
                    <SkeletonText width="100px" />
                </HStack>
            </ListItem>

        </List>
    );
};

export default GenreListSkeleton;