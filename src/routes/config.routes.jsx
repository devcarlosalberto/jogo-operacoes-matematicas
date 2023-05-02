import { Routes, Route } from "react-router-dom"

import { Config } from "../pages/Config"

export function ConfigRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Config />} />
        </Routes>
    )
}
