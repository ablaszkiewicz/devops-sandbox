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

function Dashboard() {
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
                <Heading size={"md"}>Status</Heading>
                <Alert
                    mt={4}
                    status="warning"
                    variant="subtle"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    height="140px"
                    borderRadius={15}
                >
                    <AlertIcon boxSize="40px" mr={0} />
                    <AlertTitle mt={4} mb={1} fontSize="lg">
                        Badania do wykonania!
                    </AlertTitle>
                    <AlertDescription maxWidth="sm">
                        Masz do wykonania 2 badania.
                    </AlertDescription>
                </Alert>

                <Heading size={"md"} mt={8}>
                    Badania do wykonania
                </Heading>
                <Flex mt={4} overflow={"hidden"} gap={4}>
                    <Disease name="Rak skóry" percent={87} />
                    <Disease name="Rak piersi" percent={98} />
                </Flex>
                <Heading size={"md"} mt={8}>
                    Zaplanowane badania
                </Heading>
                <Flex mt={4} overflow={"hidden"} gap={4}>
                    <Planned name="Rak prostaty" date={"za 2 tygodnie"} />
                    <Planned name="Gruźlica złośliwa" date={"za miesiąc"} />
                </Flex>
            </Flex>
        </Flex>
    );
}

export const Disease = (props: { name: string; percent: number }) => {
    return (
        <Flex
            p={4}
            backgroundColor={"gray.700"}
            borderRadius={15}
            flexDir={"row"}
            gap={4}
            flexShrink={0}
        >
            <Flex flexDir={"column"}>
                <Text fontWeight={"bold"} fontSize={"xl"}>
                    {props.name}
                </Text>
                <Text fontSize={"xs"} opacity={0.7}>
                    Skuteczność {props.percent}%
                </Text>
            </Flex>
            <IconButton
                h={"100%"}
                aria-label="test"
                icon={<ArrowForwardIcon />}
            />
        </Flex>
    );
};

export const Planned = (props: { name: string; date: string }) => {
    return (
        <Flex
            p={4}
            backgroundColor={"gray.700"}
            borderRadius={15}
            flexDir={"row"}
            gap={4}
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
        </Flex>
    );
};

export default Dashboard;
