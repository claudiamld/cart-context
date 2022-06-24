import styled from 'styled-components'

export const Container = styled.div`
    background-color: #faedcd;
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 96% 54% 48% 32% / 49% 28% 0% 0%;
`

export const Content = styled.button`
    cursor: pointer;
    width: 9rem;
    padding: 10px 0px;
    background-color: #d4a373;
    border: none;
    border-radius: 6px;
    font-family: 'Joan', serif;
    font-size: 16px;

    :hover{
        background-color: #dda15e;
    }

`