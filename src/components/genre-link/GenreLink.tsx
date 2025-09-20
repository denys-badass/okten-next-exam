import type {FC} from "react";
import {movieService} from "@/services/movie.service";
import Link from "next/link";

type GenreProps = {
    genreId: number;
}

export const GenreLink: FC<GenreProps> = async ({genreId}) => {
    const genreName = await movieService.getGenreById(genreId);

    return (
        <Link href={{pathname: '/movies', query:{with_genres: genreId}}}>
            {genreName}
        </Link>
    );
};