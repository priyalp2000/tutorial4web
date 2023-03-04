import { Card, Image, Stack, CardBody, Heading, CardFooter, Text, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams} from 'react-router-dom';

export const Profile = () => {

    // https://stackoverflow.com/questions/66021357/how-to-pass-id-to-react-js-path-link
    const { id } = useParams();
    const url = "https://express-t4.onrender.com/api/users/"+id;
    const [details, setDetails] = useState({});

    useEffect(() => {
        const fetchUserDetails = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setDetails(data);
        }
        fetchUserDetails();
    }, []);

    return(
        // https://chakra-ui.com/docs/components/card
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            ml={5}
            mr={5}
            mt={10}
            >
            <CardBody>
            {/* https://chakra-ui.com/docs/components/center */}
                <Center>
                    <Image
                        objectFit='cover'
                        boxSize='450px'
                        src = {details.picture}
                        alt='Profile Photo'
                        borderRadius='lg'
                        />
                </Center>
                <Stack>
                    <CardBody>
                    <Heading size='2xl'>
                        {details.name}
                    </Heading>
                    <Text py='1' fontSize='2xl'>
                        <b>About: </b>{details.about}
                    </Text>
                    <Text py='1' fontSize='2xl'>
                        <b>Address: </b>{details.address}
                    </Text>
                    <Text py='1' fontSize='2xl'>
                        <b>Company: </b>{details.company}
                    </Text>
                    <Text py='1' fontSize='2xl'>
                        <b>Email: </b>{details.email}
                    </Text>
                    <Text py='1' fontSize='2xl'>
                        <b>Gender: </b>{details.gender}
                    </Text>
                    <Text py='1' fontSize='2xl'>
                        <b>Phone: </b>{details.phone}
                    </Text>
                    <Text py='1' fontSize='2xl'>
                        <b>Age: </b>{details.age}
                    </Text>
                    </CardBody>
                </Stack>
            </CardBody>
        </Card>
    );
}
export default Profile;