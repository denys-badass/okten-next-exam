'use client'

import {Button} from "@chakra-ui/react";
import {useRouter} from "next/navigation";
import {useLoginStore} from "@/ store/useLoginStore";

export const GuestButton = () => {
    const setGuestLogin = useLoginStore(state => state.setGuestLogin);
    const router = useRouter();

    const guestLoginHandler = () => {
        setGuestLogin();
        router.push("/movies");
    }

    return (
        <Button colorPalette='teal' variant='solid' size='lg' p='4' onClick={guestLoginHandler}>
            Continue as Guest
        </Button>
    );
};