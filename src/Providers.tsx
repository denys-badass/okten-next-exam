'use client'

import {HeroUIProvider, ToastProvider} from '@heroui/react'
import {ReactNode} from "react";
import {ThemeProvider} from "next-themes";

export function Providers({children}: { children: ReactNode }) {
    return (
        <HeroUIProvider>
            <ThemeProvider attribute='class' defaultTheme='system'>
                <ToastProvider />
                {children}
            </ThemeProvider>
        </HeroUIProvider>
    )
}