import {Metadata} from "next";
import {ReactNode} from "react";
import SideBar from "@/components/side-bar/SideBar";
import {Container, Grid, GridItem} from "@chakra-ui/react";

export const metadata: Metadata = {
    title: 'Movies',
}

type Props = { children: ReactNode }
const MoviesLayout = ({children}: Props) => {
    return (
        <div>
            <Container w='100dvw' h='100%' m='0 auto' pt='6'>
                <Grid templateColumns='repeat(4, 1fr)' gap='6'>
                    <GridItem colSpan={1}>
                        <SideBar/>
                    </GridItem>
                    <GridItem colSpan={3}>
                        {children}
                    </GridItem>

                </Grid>
            </Container>

        </div>
    )
};

export default MoviesLayout;