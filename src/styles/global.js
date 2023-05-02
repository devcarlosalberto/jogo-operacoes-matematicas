import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
        font-family: "Roboto";
    }

    body,
    input,
    button,
    textarea {
        font-family: "Roboto";
    }

    body {
        width: 100%;
        height: 100dvh;
        padding: 1.2rem;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.TEXT_WHITE};

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    }
`
