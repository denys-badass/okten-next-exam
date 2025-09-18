'use client'

import Form from "next/form";
import {Input} from "@heroui/input";
import {Button} from "@heroui/button";
import styles from './LoginForm.module.css'

export const LoginForm = () => {
    return (
        <>
            <div className={styles.formContainer}>
                <h1 className={styles.formHeader}>Log In</h1>
                <Form action={'/login'} className={styles.form}>
                    <Input label='Username' type='text' variant='bordered' size='sm'/>
                    <Input label='Pasword' type='password' variant='bordered' size='sm'/>
                    <Button className={styles.submitButton}>Log In</Button>
                </Form>

            </div>

        </>

    );
};