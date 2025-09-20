'use client'

import {Pagination} from "@heroui/pagination";
import {FC} from "react";
import {usePagination} from "@/hooks/usePagination";

type Props = {
    totalPages: number;
    currentPage: number;
}

export const Paginator:FC<Props> = ({totalPages, currentPage}) => {
    const {pageHandler} = usePagination();

    return (
        <>
            <Pagination total={totalPages} page={currentPage} showControls  onChange={(page) => pageHandler(page)}/>
        </>
    );
};