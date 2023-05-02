import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`

export const Option = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.4rem;

    cursor: pointer;

    * {
        cursor: pointer;
    }
`
