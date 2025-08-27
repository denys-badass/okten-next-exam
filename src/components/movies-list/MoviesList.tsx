import {FC} from "react";

import {movieServices} from "@/services/movie.services";
import {Grid} from "@chakra-ui/react";
import {MovieCard} from "@/components/movie-card/MovieCard";
import {Paginator} from "@/components/paginator/Paginator";

type Props = {
    params: Record<string, string>
}

export const MoviesList:FC<Props> = async ({params}) => {
    const searchParams = new URLSearchParams(params);
    const data = await movieServices.getMovies(searchParams.toString());
    const {results, total_pages, page} = data;

    return (
        <>
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                {results.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}

            </Grid>
            <Paginator currentPage={page} totalPages={total_pages}/>
        </>
    );
};