"use client"
import {HasChildren} from "@/types/types";
import {ThemeProvider as Provider} from "styled-components";
import {theme} from "@/lib/theme";

interface Props extends HasChildren{

}
const ThemeProvider = ({children}:Props)=>{
    return (
        <Provider theme={theme}>
            {children}
        </Provider>
    )
}


export default ThemeProvider;
