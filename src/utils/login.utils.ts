import {IUser} from "@/models/IUser";

const userLoginUtil = (user: IUser) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('loginType', 'user');
}

const guestLoginUtil = () => {
    localStorage.setItem('loginType', 'guest');
    localStorage.removeItem('user');
}

const userLogoutUtil = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('loginType');
}

export {
    userLoginUtil,
    guestLoginUtil,
    userLogoutUtil
}