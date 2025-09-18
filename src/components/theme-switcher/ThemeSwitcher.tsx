'use client'

import {useTheme} from "next-themes";
import {Button} from "@heroui/button";
import {useEffect, useState} from "react";
import {IoMoon, IoSunny} from "react-icons/io5";
import styles from './ThemeSwitcher.module.css'

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) return null

    return (
        <div className='absolute top-4 right-4'>
            <Button isIconOnly className={styles.toggle} onPress={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
                {theme === 'dark' ? <IoMoon /> : <IoSunny />}
            </Button>
        </div>
    );
};