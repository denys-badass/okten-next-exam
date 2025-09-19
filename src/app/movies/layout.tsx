import {Metadata} from "next";
import {ReactNode} from "react";
import {SideBar} from "@/components/side-bar/SideBar";

export const metadata: Metadata = {
    title: 'Movies',
    description: 'Movies metadata',
}

type Props = { children: ReactNode }
const MoviesLayout = ({children}: Props) => {
    return (
        <div className='flex p-6 gap-8'>
            <SideBar />
            {children}
        </div>
    )
};

export default MoviesLayout;