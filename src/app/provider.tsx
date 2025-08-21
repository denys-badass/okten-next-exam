"use client"

import { ChakraProvider} from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
import {system} from "@/theme/theme";
import {ReactNode} from "react";

export default function Provider(props: { children: ReactNode }) {

    return (
        <ChakraProvider value={system}>
            <ThemeProvider attribute="class" enableSystem={false} disableTransitionOnChange>
                {props.children}
            </ThemeProvider>
        </ChakraProvider>
    )
}