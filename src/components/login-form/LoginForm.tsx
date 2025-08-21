import Form from "next/form";
import {login} from "@/server-actions/login";
import {Button, Field, Fieldset, Input} from "@chakra-ui/react";

export const LoginForm = () => {
    return (
        <Form action={login}>
            <Fieldset.Root>
                <Fieldset.Legend>Login</Fieldset.Legend>
                <Fieldset.Content>
                    <Field.Root>
                        <Field.Label>Username</Field.Label>
                        <Input name='username' type='text' />
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Password</Field.Label>
                        <Input name='password' type='text' />
                    </Field.Root>
                </Fieldset.Content>
                <Button type='submit'>LogIn</Button>
            </Fieldset.Root>
        </Form>
    );
};