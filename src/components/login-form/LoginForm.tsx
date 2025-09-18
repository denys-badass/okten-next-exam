'use client'

import {Input} from "@heroui/input";
import {Button} from "@heroui/button";
import styles from './LoginForm.module.css'
import {useForm} from "react-hook-form";
import {useLogin} from "@/hooks/useLogin";
import {joiResolver} from "@hookform/resolvers/joi";
import {loginValidator} from "@/validators/login-validator";

type LoginFormProps = {
    username: string;
    password: string;
}

export const LoginForm = () => {
    const {handleSubmit, register, formState: {errors, isValid}} = useForm<LoginFormProps>({mode: 'onChange', resolver: joiResolver(loginValidator)});
    const {loginHandler} = useLogin();

    return (
        <>
            <div className={styles.formContainer}>
                <h1 className={styles.formHeader}>Log In</h1>

                <form onSubmit={handleSubmit(loginHandler)} className={styles.form}>
                    <Input label='Username' type='text' variant='bordered' size='sm' isInvalid={!!errors.username} errorMessage={errors.username?.message} {...register('username')}/>
                    <Input label='Pasword' type='password' variant='bordered' size='sm' isInvalid={!!errors.password} errorMessage={errors.password?.message} {...register('password')}/>
                    <Button className={styles.submitButton} type='submit' disabled={!isValid}>Log In</Button>
                </form>

            </div>

        </>

    );
};