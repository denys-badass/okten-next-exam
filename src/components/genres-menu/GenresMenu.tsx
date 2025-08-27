import {movieServices} from "@/services/movie.services";
import {Accordion, Span} from "@chakra-ui/react";
import React from "react";
import {GenreLink} from "@/components/genre-link/GenreLink";

export const GenresMenu = async () => {
    const {genres} = await movieServices.getGenres();
    return (
        <>
            <Accordion.Root variant='plain' collapsible>
                <Accordion.Item value='Genres'>
                    <Accordion.ItemTrigger>
                        <Span cursor='button'>Genres</Span>
                        <Accordion.ItemIndicator/>
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        {genres.map(genre => (
                            <Accordion.ItemBody p='1' key={genre.id}><GenreLink genreId={genre.id}/></Accordion.ItemBody>
                        ))}
                    </Accordion.ItemContent>
                </Accordion.Item>
            </Accordion.Root>

        </>
    );
};