import {IMovie} from "@/models/IMovie";
import {FC} from "react";
import styles from './MovieList.module.css';
import Masonry from "react-masonry-css";
import {MovieCard} from "@/components/movie-card/MovieCard";

type Props = {
    movies: IMovie[];
}

export const MovieList:FC<Props> = ({movies}) => {

    if (!movies || movies.length === 0) {
        return <div className={styles.notFound}>No movies found</div>;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.masonryGrid}>
                {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>

        </div>
    );
};