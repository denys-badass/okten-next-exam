'use server';

import {revalidatePath} from "next/cache";
import {userLogin} from "@/services/login.service";
import {ILoginData} from "@/models/ILoginData";
import {redirect} from "next/navigation";

export const login = async (formData: FormData) => {
    const user = {
        username: formData.get('username') || '',
        password: formData.get('password') || '',
    } as ILoginData;

    console.log(user);

    const logged = await userLogin(user);
    console.log(logged);
    redirect('/movies');
};