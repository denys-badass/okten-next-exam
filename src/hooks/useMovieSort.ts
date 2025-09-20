import {useRouter, useSearchParams} from "next/navigation";

export const useMovieSort = () => {
    const searchParams = useSearchParams();
    const sort = searchParams.get('sort_by') || 'popularity.desc';
    const newParams = new URLSearchParams(searchParams);
    const router = useRouter();
    const handleSortChange = (value: string) => {
        newParams.set('sort_by', value);
        newParams.delete('page');
        router.push(`/movies?${newParams.toString()}`);
    }

    return {
        sort,
        handleSortChange
    }
}