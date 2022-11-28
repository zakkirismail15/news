import styled from "styled-components";

export const HeroWrapper = styled.div`
    display: flex;
    column-gap: 2rem;

    @media (max-width: 600px){
        flex-direction: column;
        padding-top: 7rem;
    }
`

export const HeroContent = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    width: 75%;
    padding: 0 0 2rem 0;
    row-gap: 2rem;

    @media (max-width: 600px){
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`

export const HeroContentWrapper = styled.div`
    padding: 0rem .5rem 0rem 6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 600px){
        padding: 0rem;
        display:flex;
        row-gap: 2rem;
    }

`

export const HeroImage = styled.div`
    grid-column: 1/ span 2;
    img{
        width: 100%;
    }
`

export const HeroArticle = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    background-color: var(--VeryDarkBlue);
    padding: 1.5rem;
    h3{
        color: var(--SoftOrange);
    }

    @media (max-width: 600px){
       width: 100%;
    }
`

export const HeroArticleContent = styled.div`

    h5{
        color: var(--OffWhite);
        margin: 1rem 0;
        
        :hover{
            color: var(--SoftOrange);
        }
    }
    p{
        color: var(--OffWhite);
        margin: 1rem 0;
    }

    :last-child{
        hr{
           display:none;
        }
    }

    
    `