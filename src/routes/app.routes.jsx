import { Routes, Route } from "react-router-dom"

import { Game } from "../pages/Game"

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Game />} />
        </Routes>
    )
}
