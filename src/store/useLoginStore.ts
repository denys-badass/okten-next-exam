import {IUser} from "@/models/IUser";
import {create} from "zustand/react";

interface LoginState {
    loginType: 'user' | 'guest' | null;
    user: IUser | null;

    setUserLogin: (user: IUser) => void;
    setGuestLogin: () => void;
    logout: () => void;
}

export const useLoginStore = create<LoginState>((set) => ({
    loginType: null,
    user: null,

    setUserLogin: (user: IUser) => set({loginType: 'user', user}),
    setGuestLogin: () => set({loginType: 'guest', user: null}),
    logout: () => set({loginType: null, user: null}),
}))