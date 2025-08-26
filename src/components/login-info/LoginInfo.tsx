'use client'

import {useLoginStore} from "@/ store/useLoginStore";
import Link from "next/link";
import {UserAvatar} from "@/components/user-avatar/UserAvatar";

export const LoginInfo = () => {
    const user = useLoginStore(state => state.user);
    const loginType = useLoginStore(state => state.loginType);

    if (user) {
        return <UserAvatar user={user}/>
    }

    return (
        <div>
            <Link href={'/login'}>{loginType === 'guest' ? 'Guest' : 'LogIn'}</Link>
        </div>
    );
};