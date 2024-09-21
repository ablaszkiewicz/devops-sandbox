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

function Supported() {
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
                    Wspierane choroby
                </Heading>

                <Flex flexDir={"column"} gap={2}>
                    <Planned name="Rak piersi" date={"Skuteczność 87%"} />
                    <Planned name="Rak skóry" date={"Skuteczność 92%"} />
                    <Planned
                        name="Gruźlica złośliwa"
                        date={"Skuteczność 94%"}
                    />
                    <Planned name="Rak prostaty" date={"Skuteczność 98%"} />
                    <Planned
                        name="Zapalenie spojówek"
                        date={"Skuteczność 98%"}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
}

export const Planned = (props: { name: string; date: string }) => {
    return (
        <Flex
            p={4}
            backgroundColor={"gray.700"}
            borderRadius={15}
            flexDir={"row"}
            flexShrink={0}
        >
            <Flex flexDir={"column"}>
                <Text fontWeight={"bold"} fontSize={"xl"}>
                    {props.name}
                </Text>
                <Text fontSize={"xs"} opacity={0.7}>
                    {props.date}
                </Text>
            </Flex>
            <Spacer />
            <IconButton
                h={"100%"}
                aria-label="test"
                icon={<ArrowForwardIcon />}
            />
        </Flex>
    );
};

export default Supported;
