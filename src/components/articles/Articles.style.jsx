import styled from "styled-components";


export const ArticleWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    column-gap: 5rem;
    margin-top: 5rem;

    @media (max-width: 600px){
        display: flex;
        flex-direction: column;
        row-gap: 2rem;
    }
`
export const ArticleContentWrapper = styled.div`
    display: flex;
    column-gap: 1rem;
    width: 100%;
`

export const ArticleImage = styled.div`
    img{
        width: 6rem;
    }
`

export const ArticleContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3{
        color: var(--DarkGrayishBlue);
    }

    h5{
        :hover{
            color: var(--SoftRed)
        }
    }
`