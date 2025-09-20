'use client'

import {useSelectedMovie} from "@/hooks/useSelectedMovie";
import {useSearchParams} from "next/navigation";
import {getYear} from "@/utils/getYear";
import {fiveStarRating} from "@/utils/fiveStarRating";
import {getPosterUrl} from "@/utils/getPosterUrl";
import styles from './MovieInfo.module.css'
import {RatingStars} from "@/components/rating-stars/RatingStars";
import {GenreBadgesList} from "@/components/genre-badges-list/GenreBadgesList";
import {FaCamera, FaEye} from "react-icons/fa6";

export const MovieInfo = () => {
    const searchParams = useSearchParams();
    const movie = useSelectedMovie(searchParams.toString());

    if (!movie) {
        return null;
    }

    const {
        title,
        original_title,
        vote_average,
        release_date,
        genre_ids,
        vote_count,
        backdrop_path,
        poster_path,
        overview
    } = movie;
    const fiveStar = fiveStarRating(vote_average);
    const year = getYear(release_date);
    const backdropUrl = process.env.NEXT_PUBLIC_MOVIE_IMAGE_URL + '/original' + backdrop_path;


    return (
        <div className={styles.infoContainer}>
            <div className={styles.infoBg} style={{backgroundImage: `url(${backdropUrl})`}}>
            </div>
            <div className={styles.describeContainer}>
                <div>
                    <h2 className={styles.mainTitle}>{title}</h2>
                    <h3 className={styles.subTitle}>{original_title !== title && original_title}</h3>
                </div>
                <p className={styles.year}>{year}</p>
                <p>{overview}</p>
                <div className={styles.rating}>
                    <RatingStars rating={fiveStar}/>
                    <p>{fiveStar}</p>
                    <p className={styles.vote}>({vote_count} <span><FaEye/></span>)</p>
                </div>
                <div className={styles.genresList}>

                    <div className={styles.posterLink}>
                        <p>Poster</p>
                        <span><FaCamera /></span>
                    </div>
                </div>
            </div>

        </div>
    );
};