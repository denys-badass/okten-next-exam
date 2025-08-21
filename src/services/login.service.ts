import {IUser} from "@/models/IUser";
import {ILoginData} from "@/models/ILoginData";

const baseUrl = 'https://dummyjson.com/user/login';

const userLogin = async (user: ILoginData): Promise<IUser> => {
    return await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    }).then(res => res.json())
}

export {
    userLogin
}