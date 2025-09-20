'use client'

import {IMovie} from "@/models/IMovie";
import {FC} from "react";
import {useSelectedMovieStore} from "@/store/useSelectedMovieStore";

type Props = {
    movie: IMovie;
}

export const MovieInfoLink:FC<Props> = ({movie}) => {
    const setMovie = useSelectedMovieStore(state => state.setMovie);

    return (
        <div onClick={() => setMovie(movie)}>
           <p>More...</p>
        </div>
    );
};