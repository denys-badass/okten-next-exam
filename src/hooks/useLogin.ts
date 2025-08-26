import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {useLoginStore} from "@/ store/useLoginStore";
import {userLogin} from "@/services/login.service";
import {ILoginFormData} from "@/models/ILoginFormData";

export const useLogin = () => {
    const setUserLogin = useLoginStore(state => state.setUserLogin);
    const setLogout = useLoginStore(state => state.setLogout);
    const [loginError, setLoginError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        setLogout();
    }, []);

    const loginHandler = async (data: ILoginFormData) => {
        try {
            setLoginError(null);
            const loginResponse = await userLogin(data);
            setUserLogin(loginResponse);
            router.push('/movies')
        } catch (e) {
            const error = e as Error;
            console.error('Login Error', error.message || 'Unknown error');
            setLoginError('Failed to log in. Wrong username or password.');
            return e;
        }
    }

    return {
        loginHandler,
        loginError
    };
}