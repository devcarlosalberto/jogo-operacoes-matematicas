import styled from "styled-components"

export const Container = styled.button`
    width: 100%;
    padding: 0.8rem;

    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.TEXT_WHITE};

    cursor: pointer;

    border: none;
    background-color: ${({ theme }) => theme.COLORS.TEXT_RED};

    transition: all 0.3s ease-in-out;

    &:hover {
        filter: brightness(0.8);
    }
`
