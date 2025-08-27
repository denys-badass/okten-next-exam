'use client'

import {FC} from "react";
import {FaRegStar, FaRegStarHalfStroke, FaStar} from "react-icons/fa6";
import {HStack} from "@chakra-ui/react";
import {IconContext} from "react-icons";

type RatingProps = {
    rating: number;
}

export const RatingStars: FC<RatingProps> = ({rating}) => {
    let fullStars = Math.floor(rating);
    const difference = rating - fullStars;

    fullStars += difference >= 0.8 ? 1 : 0;
    const halfStar = difference >= 0.3 && difference < 0.8 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
        <IconContext.Provider value={{color: 'gold', size: '24px'}}>
            <HStack gap={1}>
                {fullStars > 0 && Array(fullStars).fill(<FaStar/>).map((star, index) => (<span key={index}>{star}</span>))}
                {halfStar ? <span><FaRegStarHalfStroke /></span> : null}
                {emptyStars > 0 && Array(emptyStars).fill(<FaRegStar/>).map((star, index) => (<span key={index}>{star}</span>))}
            </HStack>
        </IconContext.Provider>
    );
};