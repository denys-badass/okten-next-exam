import {Metadata} from "next";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: 'Movies',
    description: 'Movies metadata',
}

type Props = { children: ReactNode }
const MoviesLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    )
};

export default MoviesLayout;