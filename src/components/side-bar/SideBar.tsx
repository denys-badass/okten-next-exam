import Image from "next/image";
import {SearchBar} from "@/components/search-bar/SearchBar";
import Link from "next/link";
import {GenreMenu} from "@/components/genre-menu/GenreMenu";
import {movieService} from "@/services/movie.service";
import {LoginInfo} from "@/components/login-info/LoginInfo";

export const SideBar = async () => {
    const genres = await movieService.getGenres();

    return (
        <div className='bg-indigo-50 min-h-[90dvh] w-1/4 p-4 rounded-2xl'>
            <div className='flex items-center flex-col gap-4 h-full'>
                <Link href='/'>
                    <Image src='/main-logo.svg' alt='MovieHub logo' width={300} height={100}/>
                </Link>
                <SearchBar/>
                <nav className={'flex flex-col items-start'}>
                    <Link href='/movies'>Movies</Link>
                    <GenreMenu genres={genres}/>
                </nav>
                <div className='mt-auto self-center'>
                    <LoginInfo/>
                </div>
            </div>

        </div>
    );
};