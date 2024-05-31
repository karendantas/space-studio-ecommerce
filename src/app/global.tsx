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
        margin: 0 auto;
    }

`