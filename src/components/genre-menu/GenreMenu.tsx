'use client'

import {Accordion, AccordionItem} from "@heroui/accordion";
import {FC} from "react";
import {IGenre} from "@/models/IGenre";
import Link from "next/link";

type Props = {
    genres: IGenre[];
}

export const GenreMenu:FC<Props> = ({genres}) => {

    return (
        <>
            <Accordion hideIndicator keepContentMounted className='p-0 text-start'>
                <AccordionItem key='1' title='Genres' className='text-start p-0 text-sm'>
                    <ul>
                        {genres.map(genre => (
                            <li key={genre.id}>
                                <Link href={{pathname: '/movies', query:{with_genres: genre.id}}}>{genre.name}</Link>
                            </li>
                        ))}
                    </ul>
                </AccordionItem>
            </Accordion>
        </>
    );
};