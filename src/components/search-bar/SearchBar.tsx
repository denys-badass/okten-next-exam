'use client'

import {FaSearch} from "react-icons/fa";
import {Input} from "@heroui/input";
import {useMovieSearch} from "@/hooks/useMovieSearch";

export const SearchBar = () => {
   const { query, setQuery, searchHandler, keyDownHandler } = useMovieSearch();

    return (
        <>
            <Input
                placeholder='Search...'
                endContent={<FaSearch className='cursor-pointer' onClick={searchHandler} />}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={keyDownHandler}
            />
        </>
    );
};