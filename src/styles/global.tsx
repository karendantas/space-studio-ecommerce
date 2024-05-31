"use client"
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialised;
    }
    body {
        background: ${props => props.theme.colors.backround};
    }
    main{
        max-width: 1200px;
        width: 100%;
        min-height: 100vh;
        margin: 0 auto;
    }

    .header-background{
        background-color: ${props => props.theme.colors.pink};
        width: 100%;
        height: 150px;
    }
`