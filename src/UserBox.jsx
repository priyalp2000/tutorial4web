import React from 'react';
import { GridItem, Image, Box, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export function UserBox({user}){

    const navigate = useNavigate();
    const id = user._id;

    return(
        <GridItem w='100%' h='100%' direction={["column", "row"]}>
            {/* Reference: https://chakra-ui.com/docs/components/box */}
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image boxSize='sm' src={user.picture} alt={"User"} />
            <Box p='6'>
                <Box
                mt='1'
                fontSize={25}
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
                >
                {user.name}
                </Box>
                
                {/* https://stackoverflow.com/questions/66021357/how-to-pass-id-to-react-js-path-link */}
                <Button mt='3' colorScheme="teal" variant="solid" px={20} h={8} onClick={() => navigate(`/profile/${id}`) }>
                    View
                </Button>
                
            </Box>
            </Box>
        </GridItem>
    );
}
