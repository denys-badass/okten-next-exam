'use client'

import {LuSearch} from "react-icons/lu";
import {Input, InputGroup} from "@chakra-ui/react";
import React from "react";

import {useSearchMovie} from "@/hooks/useSearchMovie";

export const SearchBar = () => {
    const {query, setQuery, searchHandler, keyDownHandler} = useSearchMovie();

    return (
        <>
            <InputGroup flex='1' endElement={<LuSearch onClick={searchHandler}/>} maxH='50px'>
                <Input placeholder='Search...' defaultValue={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={keyDownHandler}>
                </Input>
            </InputGroup>
        </>
    );
};