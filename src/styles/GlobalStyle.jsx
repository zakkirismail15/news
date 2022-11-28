import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    --SoftOrange: hsl(35, 77%, 62%);
    --SoftRed: hsl(5, 85%, 63%);
    --OffWhite: hsl(36, 100%, 99%);
    --GrayishBlue: hsl(233, 8%, 79%);
    --DarkGrayishBlue: hsl(236, 13%, 42%);
    --VeryDarkBlue: hsl(240, 100%, 5%);
}

*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
}

body{
    font-family: 'Inter', sans-serif;
    font-size: 15px;
}

img{
    width: 100%;
}

`;

export default GlobalStyle