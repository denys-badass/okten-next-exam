import {IGenre} from "@/models/IGenre";

const token = process.env.API_AUTH_TOKEN!;
const baseUrl = process.env.API_BASE_URL!;
const headers = {
    'Authorization': `Bearer ${token}`,
    'accept': 'application/json'
}

// const genreCache = new Map<number, string>();

export const movieService = {
    getGenres: async (): Promise<IGenre[]> => {
        const endpoint = `${baseUrl}/genre/movie/list`;
        return await fetch(endpoint, {
            method: 'GET',
            headers
        }).then(response => response.json()).then(data => data.genres);
    }
}