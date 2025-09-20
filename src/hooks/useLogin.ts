import {useLoginStore} from "@/store/useLoginStore";
import {useEffect} from "react";
import {userService} from "@/services/user.service";
import {useRouter} from "next/navigation";
import {addToast} from "@heroui/toast";

export const useLogin = () => {
    const setUserLogin = useLoginStore(state => state.setUserLogin);
    const setLogout = useLoginStore(state => state.logout);
    const router = useRouter();

    useEffect(() => {
        setLogout();
    }, [setLogout]);

    const loginHandler = async (data: {username: string, password: string}) => {
        const {username, password} = data;

        try {
            const loginResponse = await userService.userLogin(username, password);
            setUserLogin(loginResponse);
            router.push('/movies');
        } catch (e) {
            console.error(e instanceof Error ? e.message : 'Unknown error');
            addToast({
                title: 'Failed to log in. Wrong username or password.',
                description: 'Please try again.',
                color: 'danger',
            })
            return e;
        }
    }

    return {
        loginHandler
    }
}