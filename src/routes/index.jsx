import { BrowserRouter } from "react-router-dom"

import { AppRoutes } from "./app.routes"
import { ConfigRoutes } from "./config.routes"

import { useGame } from "../hooks/game"

export function Routes() {
    const { gameStarted } = useGame()

    return (
        <BrowserRouter>
            {gameStarted ? <AppRoutes /> : <ConfigRoutes />}
        </BrowserRouter>
    )
}
