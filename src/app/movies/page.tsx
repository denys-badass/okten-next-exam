import {SearchParams} from "next/dist/server/request/search-params";
import {FC} from "react";
import {movieService} from "@/services/movie.service";
import styles from './page.module.css';
import {SortBar} from "@/components/sort-bar/SortBar";
import {MovieList} from "@/components/movie-list/MovieList";

import {Paginator} from "@/components/paginator/Paginator";

type Props = {
    searchParams: Promise<SearchParams>;
}

const MoviesPage: FC<Props> = async ({searchParams}) => {
    const sp = await searchParams;
    const genreId = Number(sp.with_genres) || 0;
    const genre = await movieService.getGenreById(genreId);
    const {total_pages, results, page} = await movieService.getMovies('/discover/movie', sp);
    const totalPages = total_pages > 500 ? 500 : total_pages;

    return (
        <>

            <div className='flex flex-col items-center h-full'>
                <h1 className={styles.heading}>{genreId ? `${genre} movies` : 'Movies'}</h1>
                <div className={styles.pageNumber}>
                    <div className={styles.line}></div>
                    <p>Page {page}</p>
                    <div className={`${styles.line} ${styles.rightLine}`}></div>
                </div>
                <div className={styles.sortBar}>
                    <SortBar/>
                </div>
                <MovieList movies={results}/>
                {results.length > 0 && <Paginator totalPages={totalPages} currentPage={page} />}
            </div>


        </>
    );
}

export default MoviesPage;