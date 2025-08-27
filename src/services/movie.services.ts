import { IGenreResponse} from "@/models/IGenre";
import {IMovieResponse} from "@/models/IMovie";

const token = process.env.API_TOKEN;
// const moviesUrl = process.env.API_MOVIES_URL;
const genresUrl = process.env.API_GENRES_URL;
const moviesUrl = process.env.API_MOVIES_URL;
const headers = {
        'Authorization': `Bearer ${token}`,
        'accept': 'application/json',
    };

export const movieServices = {
    getGenres: async (): Promise<IGenreResponse> => {
        if (!genresUrl) {
            throw new Error('genres url is required');
        }
        return await fetch(genresUrl, {
            method: 'GET',
            headers
        }).then(res => res.json());
    },
    getGenreName: async (id: number): Promise<string> => {
        const genreMap = new Map<number, string>();
        const {genres} = await movieServices.getGenres();

        if (genres) {
            genres.forEach(genre => {
                genreMap.set(genre.id, genre.name);
            })
        }

        const genreName = genreMap.get(id);
        if (!genreName) {
            throw new Error('Genre not found')
        }
        return genreName;
    },
    getMovies: async (params: string): Promise<IMovieResponse> => {
        if (!moviesUrl) {
            throw new Error('movies url is required');
        }
        return await fetch(`${moviesUrl}?${params}`, {
            method: 'GET',
            headers,
        }).then(res => res.json());
    }
}