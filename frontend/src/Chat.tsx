import { useState } from "react";
import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Button,
    Flex,
    Heading,
    IconButton,
    Spacer,
    TagRightIcon,
    Text,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function Chat() {
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
                shadow={"lg"}
            >
                <Heading size={"md"} mb={4}>
                    Chat
                </Heading>

                <Flex flexDir={"column"} gap={2}>
                    <Message text="Cześć" alignment="right" />
                    <Message
                        text="Hej. Z tej strony specjalista AI. Opisz swoje symptomy."
                        alignment="left"
                    />
                    <Message
                        text="Mam zaczerwienioną skórę"
                        alignment="right"
                    />
                    <Message
                        text="Wydaje mi się, że to może być rak skóry. Wykonaj proszę to badanie"
                        alignment="left"
                        includeButton
                    />
                </Flex>
            </Flex>
        </Flex>
    );
}

export const Message = (props: {
    text: string;
    alignment: "left" | "right";
    includeButton?: boolean;
}) => {
    return (
        <Flex w={"100%"} flexDir={"row"}>
            {props.alignment === "right" && <Spacer />}
            <Flex
                p={3}
                backgroundColor={
                    props.alignment === "left" ? "gray.700" : "blue.600"
                }
                borderRadius={15}
                maxWidth={"80%"}
                flexDir={"column"}
            >
                <Text>{props.text}</Text>
                {props.includeButton && <Button mt={2}>Zbadaj</Button>}
            </Flex>
            {props.alignment === "left" && <Spacer />}
        </Flex>
    );
};

export default Chat;
