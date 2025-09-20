import {useSelectedMovieStore} from "@/store/useSelectedMovieStore";
import {useEffect} from "react";

export const useSelectedMovie = (deps: string) => {
    const clearMovie = useSelectedMovieStore(state => state.clearMovie);
    const movie = useSelectedMovieStore(state => state.movie);

    useEffect(() => {
        clearMovie();
    }, [deps]);

    return movie;
};