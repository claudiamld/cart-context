import styled from 'styled-components'

export const List = styled.ul`
    display: flex;
`

export const Product = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    width: 14rem;
    height: 13rem;
    margin: 1rem;
    padding-top: 20px;
    border-radius: 15px;
    background-color: #fefae0;
    font-family: 'Joan', serif;
    font-size: 24px;
    color: #bc6c25;
    
    :hover{
        box-shadow: 2px 5px 15px 2px #C7C7C7;
    }
`