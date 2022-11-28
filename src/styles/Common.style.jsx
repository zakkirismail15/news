import styled from "styled-components";

export const MainContainer = styled.div` 
    padding: 3rem 7rem;

    @media (max-width: 600px){
        padding: 1rem;
    }
`

export const Button = styled.button`
    width: fit-content;
    background-color: var(--SoftRed);
    font-size: 1rem;
    border: none;
    font-weight: 600;
    letter-spacing: .2rem;
    padding: .8rem 2rem;
    color: var(--OffWhite);

    :hover{
    background-color: var(--VeryDarkBlue);

    }
`