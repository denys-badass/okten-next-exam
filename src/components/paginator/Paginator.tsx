'use client'

import {ButtonGroup, IconButton, Pagination} from "@chakra-ui/react";
import {LuChevronLeft, LuChevronRight} from "react-icons/lu";
import {FC} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

type Props = {
    currentPage: number;
    totalPages: number;
}

export const Paginator:FC<Props> = ({currentPage, totalPages}) => {
    const pathname = usePathname();
    const sp = useSearchParams();
    const router = useRouter();
    const searchParams = new URLSearchParams(sp.toString());
    const pageHandler = (page: number) => {
        searchParams.set("page", page.toString());
        router.push(`${pathname}?${searchParams.toString()}`)
    }

    return (
        <Pagination.Root
            count={totalPages}
            pageSize={10}
            defaultPage={currentPage}
            siblingCount={2}
            onPageChange={(e) => pageHandler(e.page)}
        >
            <ButtonGroup variant="ghost" size="sm">
                <Pagination.PrevTrigger asChild>
                    <IconButton>
                        <LuChevronLeft />
                    </IconButton>
                </Pagination.PrevTrigger>

                <Pagination.Items
                    render={(page) => (
                        <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                            {page.value}
                        </IconButton>
                    )}
                />

                <Pagination.NextTrigger asChild>
                    <IconButton>
                        <LuChevronRight />
                    </IconButton>
                </Pagination.NextTrigger>
            </ButtonGroup>
        </Pagination.Root>
    );
};