import {IGenreResponse} from "@/models/IGenre";
import {IMovieResponse} from "@/models/IMovie";

const token = process.env.API_TOKEN;
// const moviesUrl = process.env.API_MOVIES_URL;
const genresUrl = process.env.API_GENRES_URL;
const moviesUrl = process.env.API_MOVIES_URL;

export const movieServices = {
    getGenres: async (): Promise<IGenreResponse> => {
        if (!genresUrl) {
            throw new Error('genres url is required');
        }
        return await fetch(genresUrl, {
            method: 'GET',
            headers: {'Authorization': `Bearer ${token}`},
        }).then(res => res.json());
    },
    getMovies: async (params: string): Promise<IMovieResponse> => {
        if (!moviesUrl) {
            throw new Error('movies url is required');
        }
        return await fetch(`${moviesUrl}?${params}`, {
            method: 'GET',
            headers: {'Authorization': `Bearer ${token}`},
        }).then(res => res.json());
    }
}