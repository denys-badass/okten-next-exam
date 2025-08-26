'use client'

import { Button, Field, Fieldset, Input} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import {ILoginFormData} from "@/models/ILoginFormData";
import {loginValidator} from "@/validators/login.validator";
import {joiResolver} from "@hookform/resolvers/joi";
import {useLogin} from "@/hooks/useLogin";
import {toaster, Toaster} from "@/components/ui/toaster";
import {useEffect} from "react";

export const LoginForm =  () => {
    const {handleSubmit, register, formState: {isValid, errors}} = useForm<ILoginFormData>({mode: "all", resolver: joiResolver(loginValidator)});
    const {loginHandler, loginError} = useLogin();

    useEffect(() => {
        if (loginError) {
            const timer = setTimeout(() => {
                const toastId = toaster.create({title: 'Login Error', description: loginError, type: 'error', closable: true });
                return () => toaster.dismiss(toastId);
            }, 0);
            return () => clearTimeout(timer);
        }
    }, [loginError]);

    return (
        <form onSubmit={handleSubmit(loginHandler)}>
            <Fieldset.Root>
                <Fieldset.Legend>Login</Fieldset.Legend>
                <Toaster />
                <Fieldset.Content>
                    <Field.Root invalid={!isValid}>
                        <Field.Label>Username</Field.Label>
                        <Input type='text' {...register('username')}/>
                        {errors.username && <Field.ErrorText>{errors.username.message}</Field.ErrorText>}
                    </Field.Root>
                    <Field.Root invalid={!isValid}>
                        <Field.Label>Password</Field.Label>
                        <Input type='password' {...register('password')}/>
                        {errors.password && <Field.ErrorText>{errors.password.message}</Field.ErrorText>}
                    </Field.Root>
                </Fieldset.Content>
                <Button type='submit' disabled={!isValid}>LogIn</Button>
            </Fieldset.Root>
        </form>
    );
};