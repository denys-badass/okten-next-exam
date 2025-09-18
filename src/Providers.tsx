'use client'

import {HeroUIProvider} from '@heroui/react'
import {ReactNode} from "react";
import {ThemeProvider} from "next-themes";

export function Providers({children}: { children: ReactNode }) {
    return (
        <HeroUIProvider>
            <ThemeProvider attribute='class' defaultTheme='system'>
                {children}
            </ThemeProvider>
        </HeroUIProvider>
    )
}