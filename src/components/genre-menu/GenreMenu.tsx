'use client'

import {Accordion, AccordionItem} from "@heroui/accordion";
import {FC} from "react";
import {IGenre} from "@/models/IGenre";

type Props = {
    genres: IGenre[];
}

export const GenreMenu:FC<Props> = ({genres}) => {

    return (
        <>
            <Accordion hideIndicator keepContentMounted className='p-0 text-start'>
                <AccordionItem key='1' title='Genres' className='text-start p-0 text-sm'>
                    <ul>
                        {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
                    </ul>
                </AccordionItem>
            </Accordion>
        </>
    );
};