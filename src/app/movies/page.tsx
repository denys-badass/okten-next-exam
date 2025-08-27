import {Bleed, Box, Flex, Heading, Text} from "@chakra-ui/react";
import {SearchParams} from "next/dist/server/request/search-params";
import {FC} from "react";
import {SortBar} from "@/components/sort-bar/SortBar";
import {MoviesList} from "@/components/movies-list/MoviesList";

type Props = {
    searchParams: Promise<SearchParams>
}

const  MoviesPage: FC<Props> = async ({searchParams}) => {
    const sp = await searchParams;
    const page: number = Number(sp.page) || 1;
    return (
        <>
            <Flex direction='column' gap={4} rounded='30px' p={6} minH='90dvh' bg='gray.subtle' shadow='section' align='center' w='100%'>
                <Heading size='4xl'>Movies</Heading>
                <Flex justify='center' align='center' gap={4} w='100%'>
                    <Box h='2px' w='35%' bg='green'></Box>
                    <Text>Page {page}</Text>
                    <Box h='2px' w='35%' bg='green'></Box>
                </Flex>
                <Box alignSelf='start'>
                    <SortBar />
                </Box>
                <MoviesList params={sp} />
            </Flex>
        </>
    );
}

export default MoviesPage;