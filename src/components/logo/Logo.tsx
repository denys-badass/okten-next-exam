import Head from "next/head";
import Image from "next/image";
import styles from "@/app/page.module.css";
import Link from "next/link";

export const Logo = () => {
    return (
        <>
            <Head>
                <link rel="preload" href="/moviehub_logo.svg" as="image" />
            </Head>
            <Link href="/">
                <Image src='/moviehub_logo.svg' alt='Logo' width={500} height={150} priority={true} className={styles.logo}/>
            </Link>
        </>
    );
};