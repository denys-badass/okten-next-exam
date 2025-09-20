import {IMovie} from "@/models/IMovie";
import {create} from "zustand/react";

interface SelectedMovieState {
    movie: IMovie | null;

    setMovie: (movie: IMovie) => void;
    clearMovie: () => void;
}

export const useSelectedMovieStore = create<SelectedMovieState>((set) => ({
    movie: null,
    setMovie: (movie: IMovie) => set({movie}),
    clearMovie: () => set({movie: null})
}))