import {FC} from "react";
import styles from './MovieCard.module.css'
import {IMovie} from "@/models/IMovie";
import {getYear} from "@/utils/getYear";
import {fiveStarRating} from "@/utils/fiveStarRating";
import {getPosterUrl} from "@/utils/getPosterUrl";
import Image from "next/image";
import {RatingStars} from "@/components/rating-stars/RatingStars";
import {GenreBadgesList} from "@/components/genre-badges-list/GenreBadgesList";
import {MovieInfoLink} from "@/components/movie-info-link/MovieInfoLink";

type MovieCardProps = {
    movie: IMovie;
}

export const MovieCard: FC<MovieCardProps> = ({movie}) => {
    const {backdrop_path, genre_ids, title, release_date, vote_average, id} = movie;
    const year = getYear(release_date);
    const rating = fiveStarRating(vote_average);
    const backdropUrl = getPosterUrl(backdrop_path, 'w500');

    return (
        <div className={`${styles.cardContainer} ${id % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'}`} >
            <div className={styles.cardLink}>
                <Image src={backdropUrl} alt={`${title} backdrop`}
                     className={styles.img} width={500} height={200}/>
                <div className={styles.cardTextContainer}>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p>{year} year</p>
                    <div className={styles.ratingStars}>
                        <RatingStars rating={rating}/>
                        <p className={styles.ratingNumber}>{rating}</p>
                    </div>
                </div>
            </div>

            <div className={styles.genreBadges}>
                <GenreBadgesList genreIds={genre_ids}/>
            </div>
            <MovieInfoLink movie={movie}/>
        </div>
    );
};