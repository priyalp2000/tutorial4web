import { Flex, Heading, Input, Button, InputGroup, Stack, InputLeftElement, chakra, Box, Avatar, FormControl, InputRightElement } from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

//Reference: https://codesandbox.io/s/ncc3q
//Reference: https://chakra-ui.com/docs/components/form-control
export const Login = () => {
    
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleShowClick = () => setShowPassword(!showPassword);
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = {username:email,password:password};
        
        // https://jasonwatmore.com/post/2020/07/17/react-axios-http-post-request-examples
        const response = await axios.post('https://express-t4.onrender.com/api/login', data)
        .then(response => {
            if(response.status === 200)
            {
                navigate('/user-list');
            }
            else
            {
                alert("Invalid Username Or Password...")
            }
        }).catch(e => {
            alert("Invalid Username Or Password...");
        });
      };

    return(
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
            >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Avatar bg="teal.500" />
                <Heading color="teal.400">Welcome</Heading>
                <Box minW={{ base: "90%", md: "468px" }}>
                <form onSubmit={handleSubmit}>
                    <Stack
                    spacing={4}
                    p="1rem"
                    backgroundColor="whiteAlpha.900"
                    boxShadow="md"
                    >
                    <FormControl>
                        <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<CFaUserAlt color="gray.300" />}
                        />
                        <Input type="email" placeholder="User name" onChange={event => setEmail(event.currentTarget.value)} />
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            color="gray.300"
                            children={<CFaLock color="gray.300" />}
                        />
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            onChange={event => setPassword(event.currentTarget.value)}
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                            {showPassword ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <Button
                        borderRadius={0}
                        type="submit"
                        variant="solid"
                        colorScheme="teal"
                        width="full"
                    >
                        Login
                    </Button>
                    </Stack>
                </form>
                </Box>
            </Stack>
        </Flex>
    );
}
export default Login;