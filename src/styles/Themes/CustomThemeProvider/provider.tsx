"use client"
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../defaultTheme";


export function CustomThemeProvider ({ children }:{children: React.ReactNode }){
    return(
        <ThemeProvider theme={defaultTheme}>
            {children}
        </ThemeProvider>
    )
}