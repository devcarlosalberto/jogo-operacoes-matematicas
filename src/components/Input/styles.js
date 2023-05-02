import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 4.2rem;

    > input {
        width: 100%;
        height: 100%;

        border: none;
        outline: 0;
        text-align: center;

        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.TEXT_WHITE};

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
    }
`
