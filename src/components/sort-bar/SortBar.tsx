'use client'

import {Select, SelectItem} from "@heroui/select";
import styles from './SortBar.module.css'
import {useMovieSort} from "@/hooks/useMovieSort";

export const SortBar = () => {
    const {sort, handleSortChange} = useMovieSort();

    return (
        <>
            <Select
                label='Sort by: '
                selectedKeys={[sort]}
                labelPlacement='outside'
                size='sm'
                className={styles.select}
                onChange={(e) => handleSortChange(e.target.value)}
            >
                <SelectItem key='popularity.desc'>Popularity ↓</SelectItem>
                <SelectItem key='popularity.asc'>Popularity ↑</SelectItem>
                <SelectItem key='title.desc'>Title ↓</SelectItem>
                <SelectItem key='title.asc'>Title ↑</SelectItem>
                <SelectItem key='primary_release_date.desc'>Release Date ↓</SelectItem>
                <SelectItem key='primary_release_date.asc'>Release Date ↑</SelectItem>
                <SelectItem key='vote_average.desc'>Rating ↓</SelectItem>
                <SelectItem key='vote_average.asc'>Rating ↑</SelectItem>
                <SelectItem key='vote_count.desc'>Review ↓</SelectItem>
                <SelectItem key='vote_count.asc'>Review ↑</SelectItem>
            </Select>
        </>
    );
};