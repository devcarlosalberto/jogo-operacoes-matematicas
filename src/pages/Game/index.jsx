import { useState, useEffect } from "react"

import {
    Container,
    TextSequenceWins,
    TextMathematicalOperation,
} from "./styles"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import theme from "../../styles/theme"

import { useGame } from "../../hooks/game"
import { sleep } from "../../utils/sleep"

export function Game() {
    const { countSequenceWins, setCountSequenceWins, arithmeticOperations } =
        useGame()

    const [responseValue, setResponseValue] = useState("")
    const [colorText, setColorText] = useState(theme.COLORS.TEXT_WHITE)

    const [mathematicalOperationResponse, setMathematicalOperationResponse] =
        useState(0)
    const [mathematicalOperationString, setMathematicalOperationString] =
        useState("")

    async function handleSubmitResponse() {
        if (responseValue.trim() == "") {
            alert("Resposta inválida!")
            return
        }

        clearInput()

        if (responseValue == mathematicalOperationResponse) {
            setColorText(theme.COLORS.TEXT_GREEN)
            await sleep(400)
            setCountSequenceWins((prevState) => prevState + 1)
            generateRandomOperation()
        } else {
            setColorText(theme.COLORS.TEXT_RED)
            await sleep(400)
            setCountSequenceWins(0)
            generateRandomOperation()
        }
    }

    async function getRandomArithmeticOperation() {
        const arrayOfArithmeticOperations = arithmeticOperations
        const randomIndex = Math.floor(
            Math.random() * arrayOfArithmeticOperations.length
        )
        const randomArithmeticOperation =
            arrayOfArithmeticOperations[randomIndex]

        return randomArithmeticOperation
    }

    async function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    async function generateRandomOperation() {
        const numberOneOfOperation = await generateRandomNumber(1, 10)
        const numberSecondOfOperation = await generateRandomNumber(
            1,
            numberOneOfOperation
        )
        const arithmeticOperationSelected = await getRandomArithmeticOperation()

        let equation
        let arithmeticOperationSymbol

        switch (arithmeticOperationSelected) {
            case "sum":
                equation = numberOneOfOperation + numberSecondOfOperation
                arithmeticOperationSymbol = "+"
                break

            case "sub":
                equation = numberOneOfOperation - numberSecondOfOperation
                arithmeticOperationSymbol = "-"
                break

            case "mul":
                equation = numberOneOfOperation * numberSecondOfOperation
                arithmeticOperationSymbol = "x"
                break
        }

        setMathematicalOperationResponse(equation)
        setMathematicalOperationString(
            `${numberOneOfOperation} ${arithmeticOperationSymbol} ${numberSecondOfOperation}`
        )
    }

    function clearInput() {
        setResponseValue("")
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setColorText(theme.COLORS.TEXT_WHITE)
        }, 250)

        return () => clearTimeout(timeoutId)
    })

    useEffect(() => {
        generateRandomOperation()
    }, [])

    return (
        <Container>
            <TextMathematicalOperation style={{ color: colorText }}>
                {mathematicalOperationString}
            </TextMathematicalOperation>

            <Input
                value={responseValue}
                onChange={(e) => setResponseValue(e.target.value)}
                inputMode="numeric"
            />

            <Button onClick={handleSubmitResponse} title="Responder" />

            <TextSequenceWins>
                Sequência de acertos: {countSequenceWins}
            </TextSequenceWins>
        </Container>
    )
}
