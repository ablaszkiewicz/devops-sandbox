import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Login from "./Login.tsx";
import Disease from "./Disease.tsx";
import Supported from "./Supported.tsx";
import Chat from "./Chat.tsx";
import Dashboard from "./Dashboard.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ChakraProvider
            theme={extendTheme({
                config: {
                    initialColorMode: "dark",
                },
            })}
        >
            <Dashboard />
        </ChakraProvider>
    </React.StrictMode>
);
