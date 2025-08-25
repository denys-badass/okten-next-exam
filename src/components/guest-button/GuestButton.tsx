'use client'

import {guestLoginUtil} from "@/utils/login.utils";
import {Button} from "@chakra-ui/react";
import {useRouter} from "next/navigation";

export const GuestButton = () => {
    const router = useRouter();

    const guestLoginHandler = () => {
        guestLoginUtil();
        router.push("/movies");
    }

    return (
        <Button colorPalette='teal' variant='solid' size='lg' p='4' onClick={guestLoginHandler}>
            Continue as Guest
        </Button>
    );
};