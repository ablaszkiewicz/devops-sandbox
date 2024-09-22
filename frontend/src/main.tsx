import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ChakraProvider, DarkMode, extendTheme } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider
      theme={extendTheme({
        config: {
          initialColorMode: 'dark',
        },
      })}
    >
      <DarkMode>
        <App />
      </DarkMode>
    </ChakraProvider>
  </React.StrictMode>
);
