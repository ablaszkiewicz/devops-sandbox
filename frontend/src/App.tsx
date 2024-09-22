import { Button, Flex, Heading } from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const backendUrl = useMemo(() => window.location.href + 'api', []);

  useEffect(() => {
    void refreshCounter();
  }, []);

  const refreshCounter = async () => {
    const response = await fetch(`${backendUrl}/counter`, {
      method: 'GET',
    });

    const data = await response.json();

    setCounter(data.count);
  };

  const increaseCounter = async () => {
    await fetch(`${backendUrl}/counter`, {
      method: 'POST',
    });

    await refreshCounter();
  };

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
        <Heading fontSize={108} color={'white'}>
          {counter}
        </Heading>
        <Button color={'white'} onClick={increaseCounter}>
          Increment
        </Button>
      </Flex>
    </Flex>
  );
}

export default App;
