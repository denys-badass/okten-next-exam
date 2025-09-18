import styles from './page.module.css';
import Link from "next/link";
import Image from "next/image";
import {Button} from "@heroui/button";

export default function Welcome() {
    return (
        <div className={styles.welcomeContainer}>
            <div className={styles.welcomeTextContainer}>
                <h1 className={styles.welcomeHeader}>
                    Welcome to
                </h1>
                <Image src='/main-logo.svg' alt='MovieHub logo' width={500} height={200}/>
                <div className={styles.buttonContainer}>
                    <Link href="/login">
                        <Button className={`${styles.button} ${styles.loginButton}`}>
                            Log In
                        </Button>
                    </Link>
                    <Link href='/movies'>
                        <Button className={`${styles.button} ${styles.guestButton}`}>Continue as a Guest</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
