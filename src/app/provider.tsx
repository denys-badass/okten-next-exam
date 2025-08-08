"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"

export default function Provider(props: { children: React.ReactNode }) {

    return (
        <ChakraProvider value={defaultSystem}>
            <ThemeProvider attribute="class" enableSystem={false} disableTransitionOnChange>
                {props.children}
            </ThemeProvider>
        </ChakraProvider>
    )
}