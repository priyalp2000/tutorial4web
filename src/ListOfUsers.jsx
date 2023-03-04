import { Grid, GridItem, SimpleGrid, VStack, Box, HStack, Button, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { UserBox } from './UserBox';

export const ListOfUsers = () => {

    const [users, setUsers] = useState([]);
    const [newKeyword, setNewKeyword] = useState("");

    const filterUser = users.filter(
        user => {
            return(
                user
                .name
                .toLowerCase()
                .includes(newKeyword.toLowerCase())
            );
        }
    );

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://express-t4.onrender.com/api/users');
            const data = await response.json();
            setUsers(data);
            
        }
        fetchUsers();
    }, []);

    const totalUsers = filterUser.map(user =>  <UserBox user={user} />);
    return(
        <div>
            <Box as="section" marginBottom={5} marginLeft={5} marginRight={5} marginTop={10}>
                {/* Reference: https://chakra-ui.com/docs/components/stack */}
                <HStack>
                <Input size='lg' variant='outline' placeholder='Search' onChange={(event) => {setNewKeyword(event.target.value);}} />
                </HStack>
            </Box>
            <SimpleGrid minChildWidth='350px' spacing='10px' direction={["column", "row"]} ml={5} mr={5}>
                {totalUsers}
            </SimpleGrid>
        </div>
    );
}