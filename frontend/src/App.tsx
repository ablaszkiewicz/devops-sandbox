import { Button, Flex, Heading } from '@chakra-ui/react';

function App() {
  return (
    <Flex
      flexDir={'column'}
      w={'100vw'}
      h={'100vh'}
      m={0}
      justifyContent={'center'}
      alignItems={'center'}
      backgroundColor={'gray.900'}
    >
      <Flex
        p={8}
        borderRadius={30}
        backgroundColor={'gray.800'}
        boxShadow={'xl'}
        flexDir="column"
        alignItems={'center'}
      >
        <Heading fontSize={108}>1338</Heading>
        <Button>Increment</Button>
      </Flex>
    </Flex>
  );
}

export default App;
