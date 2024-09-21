import { useState } from "react";
import { Button, Flex, Heading, Spacer, Text } from "@chakra-ui/react";

function Login() {
    const [count, setCount] = useState(0);

    return (
        <Flex
            flexDir={"column"}
            w={"100vw"}
            h={"100vh"}
            m={0}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor={"gray.900"}
        >
            <Flex
                w={350}
                h={600}
                p={8}
                borderRadius={30}
                backgroundColor={"gray.800"}
                boxShadow={"xl"}
                flexDir="column"
                alignItems={"center"}
                shadow={"lg"}
            >
                <img src="logo.png" />

                <Heading>InternistAI</Heading>
                <Spacer />
                <Flex flexDir="column" w={"70%"} gap={2}>
                    <Button w={"100%"}>Zaloguj się</Button>
                    <Button w={"100%"}>Zarejestruj się</Button>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Login;
