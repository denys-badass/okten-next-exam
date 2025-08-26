import {IUser} from "@/models/IUser";
import {ILoginFormData} from "@/models/ILoginFormData";
import {log} from "node:util";

const baseUrl = 'https://dummyjson.com/user/login';

const userLogin = async (user: ILoginFormData): Promise<IUser> => {
    return await fetch(baseUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
    }).then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    });

}

export {
    userLogin
}