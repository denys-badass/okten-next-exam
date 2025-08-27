import {Button, Flex} from "@chakra-ui/react";
import {FC} from "react";
import {GenreLink} from "@/components/genre-link/GenreLink";

type Props = {
    genres: number[];
}

export const GenreList:FC<Props> = ({genres}) => {
    return (
        <>
            <Flex flexWrap='wrap' gap={2}>
                    {genres.map((genreId) => (
                        <Button key={genreId} rounded='full' colorPalette='teal' size='2xs' asChild><GenreLink genreId={genreId}/></Button>
                    ))}
            </Flex>

        </>
    );
};