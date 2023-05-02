import React from "react"
import ReactDOM from "react-dom/client"

import { ThemeProvider } from "styled-components"
import GlobalStyle from "./styles/global"
import theme from "./styles/theme"

import { GameProvider } from "./hooks/game"

import { Routes } from "./routes"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <GameProvider>
                <Routes />
            </GameProvider>
        </ThemeProvider>
    </React.StrictMode>
)
