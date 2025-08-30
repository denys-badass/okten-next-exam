import React from 'react';
import {Logo} from "@/components/logo/Logo";
import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import {GenresMenu} from "@/components/genres-menu/GenresMenu";
import {LoginInfo} from "@/components/login-info/LoginInfo";
import {SearchBar} from "@/components/search-bar/SearchBar";

const SideBar = () => {
    return (
        <nav>
            <Flex direction='column' gap='4' rounded='30px' p='6' minH='90dvh' bg='gray.subtle' shadow='section'>
                <Logo/>
                <SearchBar/>
                <Link href='/movies'>Movies</Link>
                <GenresMenu/>
                <LoginInfo/>
            </Flex>
        </nav>
    );
};

export default SideBar;