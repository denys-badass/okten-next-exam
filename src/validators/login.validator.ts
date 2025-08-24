import Joi from "joi";

export const loginValidator = Joi.object({
    username: Joi.string().max(40).required().messages({
        'string.empty': 'Username is required',
        'string.max': 'Username should be less than 40 characters',
    }),
    password: Joi.string().min(6).required().messages({
        'string.empty': 'Password is required',
        'string.min': 'Password should be more than 4 characters',
    }),
})