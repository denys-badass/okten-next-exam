import React from 'react';
import {Logo} from "@/components/logo/Logo";
import { Flex, Input, InputGroup} from "@chakra-ui/react";
import Link from "next/link";
import {LuSearch} from "react-icons/lu";
import {GenresMenu} from "@/components/genres-menu/GenresMenu";

const SideBar = () => {
    return (
        <nav>
            <Flex direction='column' gap='4' rounded='30px' p='6' minH='90dvh' bg='gray.subtle' shadow='section'>
                <Logo/>
                <InputGroup flex='1' endElement={<LuSearch/>} maxH='50px'>
                    <Input placeholder='Search...'></Input>
                </InputGroup>
                <Link href='/movies'>Movies</Link>
                <GenresMenu/>
            </Flex>
        </nav>
    );
};

export default SideBar;