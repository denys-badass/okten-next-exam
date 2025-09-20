import {usePathname, useRouter, useSearchParams} from "next/navigation";

export const usePagination = () => {
    const pathname = usePathname();
    const sp = useSearchParams();
    const router = useRouter();
    const params = new URLSearchParams(sp.toString());

    const pageHandler = (page: number) => {
        params.set('page', page.toString());
        router.push(`${pathname}?${params.toString()}`)
    }

    return {
        pageHandler
    }
}