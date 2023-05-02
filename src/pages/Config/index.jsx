import { Option, Options, Container } from "./styles"
import { Button } from "../../components/Button"

import { useGame } from "../../hooks/game"

export function Config() {
    const { arithmeticOperations, setArithmeticOperations, setGameStarted } =
        useGame()

    function addArithmeticOperation(valueArithmetic) {
        setArithmeticOperations((prevState) => [...prevState, valueArithmetic])
    }

    function removeArithmeticOperation(valueArithmetic) {
        setArithmeticOperations((prevState) =>
            prevState.filter((item) => {
                return item !== valueArithmetic
            })
        )
    }

    function handleChangeArithmeticOperations(valueArithmetic) {
        const existsArithmeticOperation =
            arithmeticOperations.includes(valueArithmetic)

        if (existsArithmeticOperation) {
            removeArithmeticOperation(valueArithmetic)
        } else {
            addArithmeticOperation(valueArithmetic)
        }
    }

    function handleButtonStart() {
        if (arithmeticOperations.length == 0) {
            alert("Selecione ao menos um tipo de operação aritmética!")
            return
        }

        setGameStarted(true)
    }

    return (
        <Container>
            <h1>O que deseja treinar?</h1>
            <Options>
                <Option>
                    <input
                        type="checkbox"
                        id="sum"
                        onClick={() => {
                            handleChangeArithmeticOperations("sum")
                        }}
                    />
                    <label htmlFor="sum">Soma</label>
                </Option>

                <Option>
                    <input
                        type="checkbox"
                        id="sub"
                        onClick={() => [
                            handleChangeArithmeticOperations("sub"),
                        ]}
                    />
                    <label htmlFor="sub">Subtração</label>
                </Option>

                <Option>
                    <input
                        type="checkbox"
                        id="mul"
                        onClick={() => {
                            handleChangeArithmeticOperations("mul")
                        }}
                    />
                    <label htmlFor="mul">Multiplicação</label>
                </Option>
            </Options>
            <Button title="Iniciar" onClick={handleButtonStart} />
        </Container>
    )
}
