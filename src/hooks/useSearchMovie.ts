import {useState} from "react";
import {useRouter} from "next/navigation";

export const useSearchMovie = () => {
    const [query, setQuery] = useState<string>('');
    const router = useRouter();

    const searchHandler = () => {
        if (query) {
            router.push('/movies/search?query=' + query);
        } else {
            router.push('/movies');
        }
    }

    const keyDownHandler = (e : React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            searchHandler();
        }
    }

    return {
        query,
        setQuery,
        keyDownHandler,
        searchHandler,
    }
}