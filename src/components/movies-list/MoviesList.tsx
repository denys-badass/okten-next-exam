import {FC} from "react";
import {SearchParams} from "next/dist/server/request/search-params";
import {movieServices} from "@/services/movie.services";
import {Box, Stack} from "@chakra-ui/react";
import {MovieCard} from "@/components/movie-card/MovieCard";

type Props = {
    params: Record<string, string>
}

export const MoviesList:FC<Props> = async ({params}) => {
    const searchParams = new URLSearchParams(params);
    const data = await movieServices.getMovies(searchParams.toString());
    const {results} = data;

    return (
        <>
            <Stack>
                {results.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </Stack>
        </>
    );
};