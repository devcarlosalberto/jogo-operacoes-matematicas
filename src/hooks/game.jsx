import { createContext, useContext, useState } from "react"

export const GameContext = createContext([])

function GameProvider({ children }) {
    const [arithmeticOperations, setArithmeticOperations] = useState([])
    const [gameStarted, setGameStarted] = useState(false)
    const [countSequenceWins, setCountSequenceWins] = useState(0)

    return (
        <GameContext.Provider
            value={{
                arithmeticOperations,
                setArithmeticOperations,
                gameStarted,
                setGameStarted,
                countSequenceWins,
                setCountSequenceWins,
            }}
        >
            {children}
        </GameContext.Provider>
    )
}

function useGame() {
    const context = useContext(GameContext)
    return context
}

export { GameProvider, useGame }
