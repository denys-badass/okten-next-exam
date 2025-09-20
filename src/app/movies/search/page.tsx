import {SearchParams} from "next/dist/server/request/search-params";
import {FC} from "react";
import {movieService} from "@/services/movie.service";
import styles from "@/app/movies/page.module.css";
import {MovieList} from "@/components/movie-list/MovieList";
import {Paginator} from "@/components/paginator/Paginator";

type Props = {
    searchParams: Promise<SearchParams>;
}

const SearchPage: FC<Props> = async ({searchParams}) => {
    const sp = await searchParams;
    const query = sp.query || '';
    const {page, total_pages, results} = await movieService.getMovies('/search/movie', sp);

    const totalPages = total_pages > 500 ? 500 : total_pages;

    return (
        <div className='flex flex-col items-center h-full'>
            <h1 className={styles.heading}>Search results for {query as string}</h1>
            <div className={styles.pageNumber}>
                <div className={styles.line}></div>
                <p>Page {page}</p>
                <div className={`${styles.line} ${styles.rightLine}`}></div>
            </div>
            <MovieList movies={results}/>
            {results.length > 0 && <Paginator totalPages={totalPages} currentPage={page} />}
        </div>
    );
}

export default SearchPage;