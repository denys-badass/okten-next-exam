import {FC} from "react";
import Link from "next/link";
import {movieServices} from "@/services/movie.services";

type Props = {
    genreId: number;
}

export const GenreLink: FC<Props> = async ({genreId}) => {
    const genreName = await movieServices.getGenreName(genreId);

    return (
        <Link href={`/movies?with_genres=${genreId}`}>{genreName}</Link>
    );
};