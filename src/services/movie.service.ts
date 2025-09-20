import {IGenre} from "@/models/IGenre";
import {IMovieResponse} from "@/models/IMovie";
import {SearchParams} from "next/dist/server/request/search-params";

const token = process.env.API_AUTH_TOKEN!;
const baseUrl = process.env.API_BASE_URL!;
const headers = {
    'Authorization': `Bearer ${token}`,
    'accept': 'application/json'
}

const genreCache = new Map<number, string>();

export const movieService = {
    getGenres: async (): Promise<IGenre[]> => {
        const endpoint = `${baseUrl}/genre/movie/list`;
        return await fetch(endpoint, {
            method: 'GET',
            headers
        }).then(response => response.json()).then(data => data.genres);
    },
    getGenreById: async (id: number): Promise<string> => {
        if (genreCache.size === 0) {
            const genres = await movieService.getGenres();
            genres.forEach(genre => genreCache.set(genre.id, genre.name));
        }
        return genreCache.get(id) || 'Unknown';
    },
    getMovies: async (url: string, params: SearchParams): Promise<IMovieResponse> => {
        const searchParams = new URLSearchParams(params as Record<string, string>);
        const endpoint = `${baseUrl}${url}?${searchParams}`;
        return await fetch(endpoint, {
            method: 'GET',
            headers
        }).then(response => response.json());
    }
}