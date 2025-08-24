import {FC} from "react";
import {IGenre} from "@/models/IGenre";
import Link from "next/link";

type Props = {
    genre: IGenre;
}

export const GenreLink: FC<Props> = ({genre}) => {
    const {id, name} = genre;

    return (
        <Link href={`/movies?with_genres=${id}`}>{name}</Link>
    );
};