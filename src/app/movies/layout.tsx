import {Metadata} from "next";
import {ReactNode} from "react";
import {SideBar} from "@/components/side-bar/SideBar";
import {MovieInfo} from "@/components/movie-info/MovieInfo";

export const metadata: Metadata = {
    title: 'Movies',
    description: 'Movies metadata',
}

type Props = { children: ReactNode }
const MoviesLayout = ({children}: Props) => {
    return (
        <div className='flex p-6 gap-8'>
            <SideBar />
            <div className='min-h-[90dvh] bg-indigo-50 rounded-2xl w-3/4'>
                <MovieInfo />
                {children}
            </div>
        </div>
    )
};

export default MoviesLayout;