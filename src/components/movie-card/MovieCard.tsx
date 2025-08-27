import {Card, HStack, Text} from "@chakra-ui/react";
import {FC} from "react";
import {IMovie} from "@/models/IMovie";
import {getPosterUrl} from "@/utils/getPosterUrl";
import Image from "next/image";
import {getYear} from "@/utils/getYear";
import {RatingStars} from "@/components/rating-stars/RatingStars";
import {fiveStarRating} from "@/utils/fiveStarRating";
import {GenreList} from "@/components/genre-list/GenreList";

type Props = {
    movie: IMovie;
}

export const MovieCard:FC<Props> = ({movie}) => {
    const {backdrop_path, title, release_date, vote_average, genre_ids} = movie;
    const backdropUrl = getPosterUrl(backdrop_path, 'w500');
    const year = getYear(release_date);
    const rating = fiveStarRating(vote_average);
    return (
        <>
            <Card.Root rounded='2xl' overflow='hidden' maxW='350px'>
                    <Image src={backdropUrl} alt={`${title} backdrop`} width={500} height={300} />
                <Card.Body gap={1}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Description>{year} year</Card.Description>
                    <HStack>
                        <RatingStars rating={rating}/>
                        <Text>{rating}</Text>
                    </HStack>
                </Card.Body>
                <Card.Footer gap={2}>
                    <GenreList genres={genre_ids} />
                </Card.Footer>
            </Card.Root>
        </>
    );
};