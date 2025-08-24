'use client'

import {Button, Field, Fieldset, Input} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import {ILoginFormData} from "@/models/ILoginFormData";
import {userLogin} from "@/services/login.service";
import {userLoginUtil} from "@/utils/login.utils";
import {IUser} from "@/models/IUser";
import {useRouter} from "next/navigation";
import {loginValidator} from "@/validators/login.validator";
import {joiResolver} from "@hookform/resolvers/joi";

export const LoginForm =  () => {
    const {handleSubmit, register, formState: {isValid, errors}} = useForm<ILoginFormData>({mode: "all", resolver: joiResolver(loginValidator)});
    const router = useRouter();

    const handleLogin = async (formData: ILoginFormData) => {
        try {
            const user: IUser = await userLogin(formData);
            userLoginUtil(user);
            router.push("/movies");
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <form onSubmit={handleSubmit(handleLogin)}>
            <Fieldset.Root>
                <Fieldset.Legend>Login</Fieldset.Legend>
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