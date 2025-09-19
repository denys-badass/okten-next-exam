'use client'

import Link from "next/link";
import {useLoginStore} from "@/store/useLoginStore";
import styles from './LoginInfo.module.css'

export const LoginInfo = () => {
    // const user = useLoginStore(state => state.user);
    const loginType = useLoginStore(state => state.loginType);

    // if (user) {
    //     return <User user={user}/>
    // }

    return (
        <div className={styles.loginLink}>
            <Link href={'/login'}>{loginType === 'guest' ? 'Guest' : 'LogIn'}</Link>
        </div>
    );
};